package com.fabriciosobrinho.testetecnicoklickagenda.controllers;

import com.fabriciosobrinho.testetecnicoklickagenda.dtos.AvailableTimesDto;
import com.fabriciosobrinho.testetecnicoklickagenda.exceptions.IlegalDateFormatException;
import com.fabriciosobrinho.testetecnicoklickagenda.models.AvailableTimesModel;
import com.fabriciosobrinho.testetecnicoklickagenda.repositories.AvailableTimeRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AvailableTimesController {

    @Autowired
    AvailableTimeRepository availableTimeRepository;

    @PostMapping("/horarios")
    public ResponseEntity<AvailableTimesModel> saveNewTime(@RequestBody @Valid AvailableTimesDto availableTimesDto) throws IlegalDateFormatException {
        try {
            availableTimesDto = AvailableTimesDto.create(
                    availableTimesDto.horaDeInicio(),
                    availableTimesDto.horaDeFim(),
                    availableTimesDto.diaDaSemana(),
                    availableTimesDto.nomeDoFuncionario()
            );
        } catch (Exception ex) {
            throw new IlegalDateFormatException(ex.getMessage());
        }

        var timeModel = new AvailableTimesModel();
        BeanUtils.copyProperties(availableTimesDto, timeModel);

        return ResponseEntity.status(HttpStatus.CREATED).body(availableTimeRepository.save(timeModel));
    }

    @GetMapping("/horarios")
    public ResponseEntity<List<AvailableTimesModel>> GetAllTimes() {
        return ResponseEntity.status(HttpStatus.OK).body(availableTimeRepository.findAll());
    }

    @GetMapping("/funcionario/{nomeFuncionario}")
    public ResponseEntity<List<AvailableTimesModel>> getAvailableTimesByEmployeeName(@PathVariable(value = "nomeFuncionario") String nomeFuncionario) {
        List<AvailableTimesModel> result = availableTimeRepository.findByNomeDoFuncionario(nomeFuncionario);

        if (result.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

}