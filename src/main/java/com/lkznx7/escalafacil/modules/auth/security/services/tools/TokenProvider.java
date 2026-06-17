package com.lkznx7.escalafacil.modules.auth.security.services.tools;
import com.lkznx7.escalafacil.modules.auth.security.entity.JwtProperties;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import javax.crypto.SecretKey;
import java.util.Date;
@Service
public class TokenProvider {

    JwtProperties jwtProperties;
    UserDetailsService userDetailsService;
    public TokenProvider(UserDetailsService userDetailsService,JwtProperties jwtProperties) {
        this.userDetailsService = userDetailsService;
        this.jwtProperties = jwtProperties;
    }
    // gerar token
    public String generateToken(String username) {
        UserDetails u = userDetailsService.loadUserByUsername(username);
        String user = u.getUsername();
        SecretKey key = Keys.hmacShaKeyFor(jwtProperties.getJwtSecret().getBytes());

        return Jwts.builder()
                .claims().subject(user)
                .expiration(new Date(System.currentTimeMillis()+jwtProperties.getJwtExpiration()))
                .add("roles",u.getAuthorities()).and().signWith(key).compact();
    }

    //gerar assinatura
    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(jwtProperties.getJwtSecret().getBytes());
    }

    // pegar claim
    private io.jsonwebtoken.Claims getClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    //pegar validade
    public boolean isTokenValid(String token) {
        try {
            return !getClaims(token).getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    //pegar subject
    public String getUsernameFromToken(String token) {
        return getClaims(token).getSubject();
    }

    //pegar as roles
    public java.util.List<?> getRolesFromToken(String token) {
        return getClaims(token).get("roles", java.util.List.class);
    }

}
