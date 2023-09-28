import { Route, Routes } from 'react-router'

import { routes } from './routes/routes'
import { ErrorBoundary } from './UI-components/organisms/ErrorBoundary/ErrorBoundary'

export const App = () => {
    return (
        <ErrorBoundary>
            <Routes>
                {routes.map(({ path, component: Component }) => (
                    <Route path={path} element={<Component />} key={path} />
                ))}
            </Routes>
        </ErrorBoundary>
    )
}
