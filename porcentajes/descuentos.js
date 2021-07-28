// Cupones
const coupons = [
    {
        name: "first_time",
        discount: 45
    },
    {
        name: "birthday",
        discount: 35
    },
    {
        name: "summer_sale",
        discount: 10
    },
]

// Cálculo descuentos
function calcularDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100

    return precioDescuento
}


// Lógica HTML

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const precio = inputPrice.value

    const inputCoupon = document.getElementById("inputCoupon")
    const couponValue = inputCoupon.value

    const isCouponValid = function(coupon){
        return coupon.name === couponValue
    }

    const userCoupon = coupons.find(isCouponValid)

    if (!userCoupon) {
        alert(`Ese cupon no existe !`)
    } else {
        const descuento = userCoupon.discount
        const precioDescuento = calcularDescuento(precio, descuento)

        const result = document.getElementById("Result")
        result.innerText = `El precio final del producto es $${precioDescuento}`
    }
}