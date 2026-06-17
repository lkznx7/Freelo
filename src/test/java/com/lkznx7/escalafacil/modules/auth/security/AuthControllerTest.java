package com.lkznx7.escalafacil.modules.auth.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lkznx7.escalafacil.modules.auth.dto.AuthRequest;
import com.lkznx7.escalafacil.modules.auth.dto.RegisterRequest;
import com.lkznx7.escalafacil.modules.auth.entity.enums.Role;
import com.lkznx7.escalafacil.modules.auth.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }

    @Test
    @DisplayName("Deve registrar um usuário com sucesso e criptografar a senha")
    void deveRegistrarUsuarioComSucesso() throws Exception {
        RegisterRequest request = new RegisterRequest("lucas_dev", "senha123", Arrays.asList(Role.USER));

        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.mensagem").value("Cadastro realizado com sucesso!"));
    }

    @Test
    @DisplayName("Deve retornar BadRequest ao tentar registrar username duplicado")
    void naoDevePermitirUsernameDuplicado() throws Exception {
        RegisterRequest request = new RegisterRequest("lucas_dev", "senha123", Arrays.asList(Role.USER));
        
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.mensagem").value("Este nome de usuário já está em uso."));
    }

    @Test
    @DisplayName("Deve logar com sucesso e retornar um Token JWT válido")
    void deveLogarComSucesso() throws Exception {
        RegisterRequest registerRequest = new RegisterRequest("lk_auth", "tokenRequest123", Arrays.asList(Role.ADMIN));
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registerRequest)));

        AuthRequest loginRequest = new AuthRequest("lk_auth", "tokenRequest123");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists())
                .andExpect(jsonPath("$.mensagem").value("Login realizado com sucesso!"));
    }

    @Test
    @DisplayName("Deve retornar Unauthorized ao errar a senha no login")
    void deveFalharLoginComSenhaErrada() throws Exception {
        RegisterRequest registerRequest = new RegisterRequest("lk_auth", "senhaCorreta", Arrays.asList(Role.USER));
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registerRequest)));

        AuthRequest loginErrado = new AuthRequest("lk_auth", "senhaErrada");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginErrado)))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.mensagem").value("Usuário ou senha inválidos."));
    }
}
