import { Cliente } from "./cliente";
import { Empleado } from "./empleado";

export interface Orden {
    id: number,
    fecha: Date,
    subtotal: number,
    total: number,
    cliente: Cliente,
    empleado: Empleado,
}
