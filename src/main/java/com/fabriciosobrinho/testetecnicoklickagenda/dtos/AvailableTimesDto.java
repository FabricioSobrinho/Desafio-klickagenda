package com.fabriciosobrinho.testetecnicoklickagenda.dtos;

import com.fabriciosobrinho.testetecnicoklickagenda.enums.WeekDaysEnum;
import com.fabriciosobrinho.testetecnicoklickagenda.exceptions.IlegalDateFormatException;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalTime;

public record AvailableTimesDto(
        @NotNull(message = "A hora de início não pode ser nula")
        LocalTime horaDeInicio,
        @NotNull(message = "A hora de fim não pode ser nula")
        LocalTime horaDeFim,
        @NotNull(message = "Insira um dia da semana.")
        WeekDaysEnum diaDaSemana,
        @NotBlank(message = "Insira o nome do funcionário")
        String nomeDoFuncionario)
{
    public static AvailableTimesDto create(
            @NotNull LocalTime horaDeInicio,
            @NotNull LocalTime horaDeFim,
            @NotNull WeekDaysEnum diaDaSemana,
            @NotBlank String nomeDoFuncionario) {

        if (horaDeFim.isBefore(horaDeInicio)) {
            throw new IllegalArgumentException("A hora de fim deve ser maior que a hora de início");
        }

        return new AvailableTimesDto(horaDeInicio, horaDeFim, diaDaSemana, nomeDoFuncionario);
    }
}
