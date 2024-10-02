//this file would be active if the page next to it
//or any nested page or layout is loading data

import style from './loading.module.css'

export default function MealsLoadingPage(){
    return<p className={style.loading}>Fetching Meals...</p>
}