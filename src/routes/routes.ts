import { FC } from 'react'

import { MainPage } from '../pages/MainPage/index'

interface Route {
    component: FC
    path: string
}

const appRoute = '/'

export const routes: Route[] = [{ component: MainPage, path: appRoute }]
