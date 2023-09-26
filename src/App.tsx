import { Route, Routes } from 'react-router'

import { routes } from './routes/routes'

export const App = () => {
    return (
        <Routes>
            {routes.map(({ path, component: Component }) => (
                <Route path={path} element={<Component />} key={path} />
            ))}
        </Routes>
    )
}
