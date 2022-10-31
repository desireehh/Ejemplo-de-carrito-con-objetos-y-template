const carrito = document.getElementById(`carrito`);
const button= document.querySelectorAll(`.card .btn`);
const template= document.getElementById(`template`);
const fragment= document.createDocumentFragment();


const carritoObjeto={};

const agregarCarrito=(e)=>{


    const producto={
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1,
        precio:500,
    };

     if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    }


    carritoObjeto[producto.id] = producto;

    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.precio;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};

button.forEach((btn)=>btn.addEventListener("click", agregarCarrito))
