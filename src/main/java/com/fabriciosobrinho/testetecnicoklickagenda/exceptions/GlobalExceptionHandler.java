package com.fabriciosobrinho.testetecnicoklickagenda.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.time.format.DateTimeParseException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        String detalhe = extractDatabaseErrorMessage(ex);
        return ResponseEntity.badRequest().body("Erro de integridade de dados: " + detalhe);
    }

    private String extractDatabaseErrorMessage(DataIntegrityViolationException ex) {
        String message = ex.getRootCause().getMessage();
        String[] errorMessage = message.split("Detalhe");

        return errorMessage[0];
    }

    @ExceptionHandler(DateTimeParseException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleDateTimeParseException(DateTimeParseException ex) {
        return ResponseEntity.badRequest().body("Formato de hora inválido. Utilize o formato HH:mm");
    }

    @ExceptionHandler(IlegalDateFormatException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public static ResponseEntity<String> handleValidationException(Exception ex) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body("Erro de validação: " + ex.getMessage());
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    public static ResponseEntity<String> handleJSONParserException(Exception ex) {
        HttpStatus status = HttpStatus.NOT_ACCEPTABLE;
        return ResponseEntity.status(status).body("Erro na conversão: " + ex.getMessage());
    }
}
