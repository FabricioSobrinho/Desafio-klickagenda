package com.fabriciosobrinho.testetecnicoklickagenda.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.aspectj.lang.annotation.After;

import java.time.LocalTime;

public record AvailableTimesDto(@NotNull LocalTime horaDeInicio, @NotNull LocalTime horaDeFim, @NotBlank String diaDaSemana, @NotBlank String nomeDoFuncionario) {
}
