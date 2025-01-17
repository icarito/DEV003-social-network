import { functionSignin, functionUserGoogle } from '../lib/index';

export const Home = (onNavigate) => {
  const HomeContent = document.createElement('main');
  const HomeDivImage = document.createElement('div');
  const logoIcon = document.createElement('img');
  const inputUser = document.createElement('input');
  const inputPasword = document.createElement('input');
  const divbuttongoogle = document.createElement('div');
  const iconGoogle = document.createElement('i');
  const tittleLogin = document.createElement('h1');
  const mensajeLogin = document.createElement('h2');
  const HomeForm = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');

  mensajeLogin.textContent = 'Te gusta comer a nosotros tambien!';
  logoIcon.src = './assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgram';
  HomeContent.className = 'homepage';
  HomeDivImage.className = 'imageDiv';
  divbuttongoogle.className = 'group_button';
  iconGoogle.className = 'fa-brands fa-google';
  mensajeLogin.className = 'h2_home';

  tittleLogin.className = 'h1_home';
  HomeForm.className = 'formDiv';
  buttonRegister.className = 'btn register';
  buttonLogin.className = 'btn login';
  buttonLoginGoogle.className = 'btn loginGoogle';
  buttonRegister.id = 'btnRegister';
  inputUser.placeholder = 'Correo electronico';
  inputPasword.placeholder = 'Contraseña';
  inputPasword.type = 'password';
  inputPasword.required = 'true';

  tittleLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa con Google';

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputUser.value;
    const pasword = inputPasword.value;
    functionSignin(email, pasword).then((promiseLogin) => {
      if (promiseLogin === 'auth/invalid-email') {
        alert('Verifique su correo');
      } else if (promiseLogin === 'auth/wrong-password') {
        alert('La contraseña invalida');
      } else if (typeof (promiseLogin) === 'object') {
        onNavigate('/login');
      } else {
        alert('Verifique sus datos o registrese');
      }
    });

    // console.log(email,pasword)
    // e.preventDefault();

    // const email = inputUser.value;
    // const pasword = inputPasword.value;

    // console.log(email, pasword);
    // try {
    //   const userCredentials = await create;
    // } catch (error) {

    // }
    // onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  buttonLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    functionUserGoogle().then((promiseGoogle) => {
      if (promiseGoogle !== 'error') {
        onNavigate('/login');
      }
    });
  });

  HomeContent.appendChild(logoIcon);
  HomeContent.appendChild(HomeDivImage);
  HomeContent.appendChild(HomeForm);

  // HomeForm.appendChild(inputform);
  HomeForm.appendChild(tittleLogin);
  HomeForm.appendChild(mensajeLogin);
  HomeForm.appendChild(inputUser);
  HomeForm.appendChild(inputPasword);
  HomeForm.appendChild(buttonLogin);
  HomeForm.appendChild(buttonRegister);
  HomeForm.appendChild(divbuttongoogle);
  divbuttongoogle.appendChild(iconGoogle);
  divbuttongoogle.appendChild(buttonLoginGoogle);

  return HomeContent;
};
