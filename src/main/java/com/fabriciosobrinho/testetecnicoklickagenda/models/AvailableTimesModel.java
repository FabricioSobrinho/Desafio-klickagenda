package com.fabriciosobrinho.testetecnicoklickagenda.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "TB_HORARIOS")
public class AvailableTimesModel implements Serializable {
    private static final long serialVersionId = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID ID_horario;
    private LocalTime horaDeInicio;
    private LocalTime horaDeFim;
    private String diaDaSemana;
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

    public String getDiaDaSemana() {
        return diaDaSemana;
    }

    public void setDiaDaSemana(String diaDaSemana) {
        this.diaDaSemana = diaDaSemana;
    }
    public String getNomeDoFuncionario() {
        return nomeDoFuncionario;
    }

    public void setNomeDoFuncionario(String nomeDoFuncionario) {
        this.nomeDoFuncionario = nomeDoFuncionario;
    }
}