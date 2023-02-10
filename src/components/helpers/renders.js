import moment from "moment"

export const renderDate = (date)=>moment(date).format("DD/MM/YYYY")
export const renderNumbers = (string) => string.replace(/(.)(?=(\d{3})+$)/g,'$1 ')
export const renderNumeroFacture = (date)=>(moment(date).year()-1976)*10
export const renderNumeroDossier= (date,numero)=>`${(moment(date).year()-1985)*10}/${numero?numero:"-"}/${moment(date).year().toString().slice(2, 4).toString()}`
export const renderHeure = (heure)=>`${heure &&heure.substring(0, 2)}:${heure &&heure.substring(2, 4)}:${heure &&heure.substring(4, 6)}`