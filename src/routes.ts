import { HomePage, SuccessPage } from './pages'

export const paths = {
  home: '/',
  success: '/success'
}

const routes = [
  {
    path: paths.home,
    component: HomePage,
    exact: true,
  },
  {
    path: paths.success,
    component: SuccessPage,
    exact: true,
  },
]

export default routes
