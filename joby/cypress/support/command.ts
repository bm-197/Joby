Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth/callback/credentials',
      form: true,
      body: {
        email: 'test@example.com',
        password: 'password'
      },
    }).then((response) => {
      const cookies = response.headers['set-cookie'];
      let sessionCookie: string | undefined;
      if (Array.isArray(cookies)) {
        sessionCookie = cookies.find((cookie) =>
          cookie.startsWith('next-auth.session-token')
        );
      } else if (typeof cookies === 'string') {
        sessionCookie = cookies;
      }
  
      if (sessionCookie) {
        const tokenValue = sessionCookie.split(';')[0].split('=')[1];
        cy.setCookie('next-auth.session-token', tokenValue);
      }
    });
  });
  