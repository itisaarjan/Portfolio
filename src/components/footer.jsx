import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import emailjs from '@emailjs/browser'



const Footer = forwardRef((props, ref) => {
  const footerRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qbt5fep', 'template_ivgxtdm', form.current, {
        publicKey: 'r_PVlFmC8nfnA09Zm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          window.location.reload(); // This will refresh the page
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  useImperativeHandle(ref, () => ({
    scrollTo: () => footerRef.current?.scrollIntoView({ behavior: 'smooth' }),
  }));

  return (
    <footer ref={footerRef} className="bg-black lg:grid lg:grid-cols-5  p-4 w-full">
      <div className="relative block h-24 lg:col-span-2 lg:h-full text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1663050681752-4c95effcca58?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-4 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-base uppercase tracking-wide text-gray-500">Contact me At</span>
              <a
                href="mailto:arjansubedi2021@gmail.com"
                className="block text-lg font-medium text-gray-300 hover:opacity-75"
              >
                arjansubedi2021@gmail.com
              </a>
            </p>

            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>Phone Number: +1-(813)-992-7839</li>
            </ul>

            <ul className="mt-4 flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/arjansubedi/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/arjansbd/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="30" height="30">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/itisaarjan"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="30" height="30">
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.284-.011-1.035-.017-2.031-3.338.726-4.042-1.607-4.042-1.607-.546-1.384-1.334-1.754-1.334-1.754-1.09-.743.083-.727.083-.727 1.205.085 1.836 1.237 1.836 1.237 1.069 1.834 2.805 1.303 3.49.996.108-.774.419-1.303.763-1.6-2.665-.304-5.466-1.335-5.466-5.935 0-1.313.47-2.387 1.236-3.227-.124-.304-.536-1.53.117-3.184 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.503.335c1.91-1.295 2.749-1.025 2.749-1.025.545 1.378.202 2.397.1 2.65.64.698 1.028 1.591 1.028 2.683 0 3.841-2.338 4.688-4.566 4.936.359.31.678.927.678 1.868 0 1.35-.012 2.438-.012 2.77 0 .269.18.58.688.482C19.137 20.194 22 16.441 22 12.017 22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h2 className="text-lg font-semibold text-gray-300">Contact Form</h2>
            <form className="mt-4" ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-gray-300" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-2 border border-gray-400 rounded"
                  name='from_name'
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300" htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  required
                  className="w-full p-2 border border-gray-400 rounded"
                  rows="3"
                  name='from_message'
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
