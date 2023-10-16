import React from 'react'
import './Contacto.scss'

const Contacto = () => {
  return (
<div class="form-container">
  <form action="#" class="form-container__form">
    <div class="form-container__row">
      <div class="form-container__input-group">
        <input class="form-container__input" type="text" id="name" required/>
        <label class="form-container__label" for="name"><i class="fa-solid fa-user"></i> Ingrese su Nombre</label>
      </div>

      <div class="form-container__input-group">
        <input class="form-container__input" type="text" id="number" required/>
        <label class="form-container__label" for="number"><i class="fa-solid fa-phone"></i> Ingrese su Teléfono</label>
      </div>
    </div>

    <div class="form-container__input-group">
      <input class="form-container__input" type="text" id="email" required/>
      <label class="form-container__label" for="email"><i class="fa-solid fa-envelope"></i> Ingrese su E-Mail</label>
    </div>

    <div class="form-container__input-group">
      <textarea class="form-container__textarea" id="message" rows="8"></textarea>
      <label class="form-container__label" for="message">Escriba aqui...</label>
    </div>

    <button type="submit" class="form-container__button">Enviar</button>

  </form>
</div>
   
  )
}

export default Contacto