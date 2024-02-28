package com.fabriciosobrinho.testetecnicoklickagenda.repositories;

import com.fabriciosobrinho.testetecnicoklickagenda.models.AvailableTimesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface AvailableTimeRepository extends JpaRepository<AvailableTimesModel, UUID> {
    List<AvailableTimesModel> findByNomeDoFuncionario(String nomeDoFuncionario);
}
