interface Apartado {
    val tarifa: Double
}

class ApartadoDeHotel : Apartado {

    override val tarifa: Double = 12.5

    override fun toString(): String {
        return "Aparatado de Hotel"
    }
}

class ApartadoDeCamion : Apartado {

    override val tarifa: Double = 8.5

    override fun toString(): String {
        return "Apartado de Camion"
    }
}

class Customer(var apartado: Apartado) {

    fun CalculaTarifa(numPasajeros: Int): Double {
        val tarifa = numPasajeros * apartado.tarifa
        println("Calculado la tarifua usando el " + apartado)
        return tarifa
    }
}

fun main(args: Array<String>) {

    //Hotel
    val cust = Customer(ApartadoDeHotel())
    var tarifa = cust.CalculaTarifa(5)
    println(tarifa)

    //Camion
    cust.bookingStrategy = ApartadoDeCamion()
    tarifa = cust.CalculaTarifa(5)
    println(tarifa)
}
