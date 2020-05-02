type RoutesKeys =
  | 'home'
  | 'login'
  | 'message'
  | 'messages'
  | 'settings'
  | 'signup'
  | 'user';

type Routes = Record<RoutesKeys, string>;

export const ROUTES: Routes = {
  home: '/',
  login: '/login',
  message: '/message',
  messages: '/messages',
  settings: '/settings',
  signup: '/signup',
  user: '/user',
};
