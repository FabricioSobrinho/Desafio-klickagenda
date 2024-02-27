package com.fabriciosobrinho.testetecnicoklickagenda.enums;

public enum WeekDaysEnum {
    Domingo,
    SegundaFeira,
    TercaFeira,
    QuartaFeira,
    QuintaFeira,
    SextaFeira,
    Sabado;

    public static boolean contains(String value) {
        for (WeekDaysEnum day : WeekDaysEnum.values()) {
            if (day.name().equalsIgnoreCase(value)) {
                return true;
            }
        }
        return false;
    }
}
