package com.fabriciosobrinho.testetecnicoklickagenda.controllers;

import com.fabriciosobrinho.testetecnicoklickagenda.dtos.AvailableTimesDto;
import com.fabriciosobrinho.testetecnicoklickagenda.models.AvailableTimesModel;
import com.fabriciosobrinho.testetecnicoklickagenda.repositories.AvailableTimeRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AvailableTimesController {

    @Autowired
    AvailableTimeRepository availableTimeRepository;

    @PostMapping("/horarios")
    public ResponseEntity<AvailableTimesModel> saveNewTime(@RequestBody @Valid AvailableTimesDto availableTimesDto) {
        var timeModel = new AvailableTimesModel();
        BeanUtils.copyProperties(availableTimesDto, timeModel);

        return ResponseEntity.status(HttpStatus.CREATED).body(availableTimeRepository.save(timeModel));
    }
}