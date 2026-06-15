package com.lkznx7.escalafacil;

import org.junit.jupiter.api.Test;
import org.springframework.modulith.core.ApplicationModules;

class ModulithTests {

    @Test
    void verifyModules() {
        ApplicationModules.of(EscalaFacilApplication.class).verify();
    }
}
