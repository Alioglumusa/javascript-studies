'use strict'

const lat = document.querySelector('#lat');
const lng = document.querySelector('#lng');
const btnSubmit = document.querySelector('#btnSubmit');
const pnlAlert = document.querySelector('.alert');
const loading = document.querySelector('.spinner-border');

function getGeo(){
    loading.classList.remove('hidden');

    if (lat.value.length <= 0 || lng.value.length <= 0 ) {
        errorReceive('Değerler hatalı girildi. Lütfen kontrol ediniz.')
        return;
    }

    fetch(`https://geocode.xyz/${lat.value},${lng.value}?geoit=json`)
    .then(response => {
        if(response.status == 200){
            response.json().then(obj => {
                successProcess(`${obj.country}, ${obj.region} bölgesindesiniz.`);
            })
            .catch(e => {
               errorReceive(e.message());
            })
        } else {
            errorReceive(`Hata olustu: ${response.status}, ${response.statusText}`);
        }
    })
    .catch(e => {
       errorReceive(e.message());
    });



}

function errorReceive(msg){
    pnlAlert.classList.remove('hidden', 'alert-success');
    pnlAlert.classList.add('alert-danger')
    pnlAlert.textContent = msg;
    loading.classList.add('hidden');
}


function successProcess(msg){
    pnlAlert.classList.remove('hidden', 'alert-danger');
    pnlAlert.classList.add('alert-success')
    pnlAlert.textContent = msg;
    loading.classList.add('hidden');
}

btnSubmit.addEventListener('click', getGeo);
