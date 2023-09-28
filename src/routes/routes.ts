import { FC } from 'react'

import { MainPage } from '../pages/MainPage'

interface Route {
    component: FC
    path: string
}

const appRoute = '/'

export const routes: Route[] = [{ component: MainPage, path: appRoute }]
