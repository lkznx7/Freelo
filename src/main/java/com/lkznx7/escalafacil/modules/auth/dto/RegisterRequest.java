package com.lkznx7.escalafacil.modules.auth.dto;

import com.lkznx7.escalafacil.modules.auth.entity.enums.Role;
import java.util.List;

public record RegisterRequest(String username, String password, List<Role> role) {
}
