package com.fabriciosobrinho.testetecnicoklickagenda.models;

import com.fabriciosobrinho.testetecnicoklickagenda.enums.WeekDaysEnum;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalTime;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "TB_HORARIOS",uniqueConstraints = @UniqueConstraint(name = "uk_nome_dia_semana", columnNames = {"nomeDoFuncionario", "diaDaSemana"}))
public class AvailableTimesModel implements Serializable {
    private static final long serialVersionId = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID ID_horario;
    private LocalTime horaDeInicio;
    private LocalTime horaDeFim;
    private WeekDaysEnum diaDaSemana;
    private String nomeDoFuncionario;

    public LocalTime getHoraDeInicio() {
        return horaDeInicio;
    }

    public void setHoraDeInicio(LocalTime horaDeInicio) {
        this.horaDeInicio = horaDeInicio;
    }

    public LocalTime getHoraDeFim() {
        return horaDeFim;
    }

    public void setHoraDeFim(LocalTime horaDeFim) {
        this.horaDeFim = horaDeFim;
    }

    public WeekDaysEnum getDiaDaSemana() {
        return diaDaSemana;
    }

    public void setDiaDaSemana(WeekDaysEnum diaDaSemana) {
        this.diaDaSemana = diaDaSemana;
    }
    public String getNomeDoFuncionario() {
        return nomeDoFuncionario;
    }

    public void setNomeDoFuncionario(String nomeDoFuncionario) {
        this.nomeDoFuncionario = nomeDoFuncionario;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;

        AvailableTimesModel availableTimes = (AvailableTimesModel) object;

        return this.nomeDoFuncionario.equals(availableTimes.nomeDoFuncionario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ID_horario, horaDeInicio, horaDeFim, diaDaSemana, nomeDoFuncionario);
    }

}