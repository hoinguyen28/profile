//import components
import BoxText from './boxText';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact({ data }) {
  useEffect(() => {
    AOS.init();
    // hamf kiem tra
    let Validator = (option) => {
      // hàm thực hiện validate
      let validate = (inputElement, rule) => {
        let errorElement = inputElement.parentElement.querySelector(
          option.errorSelector
        );
        let errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
          errorElement.innerText = errorMessage;
        } else {
          errorElement.innerText = '';
        }

        return !errorMessage;
      };

      let formElement = document.querySelector(option.form);
      if (formElement) {
        formElement.onsubmit = (e) => {
          e.preventDefault();

          let isFormValid = true;

          option.rules.forEach((rule) => {
            let inputElement = document.querySelector(rule.selector);
            let isValid = validate(inputElement, rule);
            if (!isValid) {
              isFormValid = false;
            }
          });

          if (isFormValid) {
            if (typeof option.onSubmit === 'function') {
              let dataInput = formElement.querySelectorAll('[name]');
              let dataForm = Array.from(dataInput).reduce((values, input) => {
                return (values[input.name] = input.value) && values;
              }, {});
              option.onSubmit(dataForm);
            }
          }
        };

        option.rules.forEach((rule) => {
          let inputElement = document.querySelector(rule.selector);
          if (inputElement) {
            // Xử lý khi người dùng blur khỏi input
            inputElement.onblur = () => {
              validate(inputElement, rule);
            };

            // xử lý người dùng khi nhập vào input
            inputElement.oninput = () => {
              let errorElement = inputElement.parentElement.querySelector(
                option.errorSelector
              );
              errorElement.innerText = '';
            };
          }
        });
      }
    };

    Validator.isRequired = (selector) => {
      return {
        selector: selector,
        test: (value) => {
          return value.trim() ? undefined : 'Name Is Required.';
        },
      };
    };

    Validator.isEmail = (selector) => {
      return {
        selector: selector,
        test: (value) => {
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(value) ? undefined : 'Email Is Required.';
        },
      };
    };
    Validator({
      form: '#Contact__form',
      errorSelector: '.contact__message',
      rules: [
        Validator.isRequired('#Name'),
        Validator.isEmail('#Email'),
        Validator.isRequired('#Message'),
      ],
      onSubmit: (data) => {
        console.log(data);
      },
    });
  }, []);
  const { boxText, items, form, btn } = data;
  return (
    <div className="contact" id="contact">
      <div className="container">
        <BoxText data={boxText} />
        <div
          className="contact__info flex"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {items.map((item) => {
            return (
              <div key={item.id} className="contact__item ">
                <div className="contact__inner flex">
                  <div className="contact__image">
                    <img className="contact__img" src={item.imgUrl}></img>
                  </div>
                  <div className="contact__content">
                    <h5 className="contact__item-title">{item.title}</h5>
                    {item.description.map((des, index) => (
                      <a className="contact__item-link" key={index}>
                        <p className="contact__item-des">{des}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="contact__wrap flex"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="contact__left">
            <div className="contact__left-title">
              <p>{form.title}</p>
              <span className="contact__left-subTitle">{form.subTitle}</span>
            </div>
            <form id="Contact__form">
              {form.input.map((text, index) => (
                <div key={index}>
                  <p className="contact__message"></p>
                  <input
                    className={`contact__input contact__${text}`}
                    type="text"
                    placeholder={text}
                    id={text}
                    name={text}
                  ></input>
                </div>
              ))}
            </form>
            <a className="btn">{btn}</a>
          </div>
          <div className="contact__right">
            <iframe className="contact__iframe" src={form.iframeUrl}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
