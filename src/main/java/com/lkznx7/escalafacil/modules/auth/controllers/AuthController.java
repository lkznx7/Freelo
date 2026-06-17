package com.lkznx7.escalafacil.modules.auth.controllers;

import com.lkznx7.escalafacil.modules.auth.dto.AuthRequest;
import com.lkznx7.escalafacil.modules.auth.dto.RegisterRequest;
import com.lkznx7.escalafacil.modules.auth.entity.User;
import com.lkznx7.escalafacil.modules.auth.repository.UserRepository;
import com.lkznx7.escalafacil.modules.auth.security.services.tools.TokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder, TokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            return ResponseEntity.badRequest().body(Map.of("mensagem", "Este nome de usuário já está em uso."));
        }

        User user = new User(
                request.username(),
                passwordEncoder.encode(request.password()),
                request.role()
        );

        userRepository.save(user);
        return ResponseEntity.ok(Map.of("mensagem", "Cadastro realizado com sucesso!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.username(), request.password())
            );

            String token = tokenProvider.generateToken(request.username());
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "mensagem", "Login realizado com sucesso!"
            ));

        } catch (org.springframework.security.authentication.BadCredentialsException e) {
            return ResponseEntity.status(401).body(Map.of("mensagem", "Usuário ou senha inválidos."));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("mensagem", "Usuário ou senha inválidos."));
        }
    }
}
