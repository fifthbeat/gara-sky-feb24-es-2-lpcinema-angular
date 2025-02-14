describe('Landing Page E2E Tests', () => {
  // Test 1: Check that the landing page renders correctly
  it('displays the landing page title', () => {
    cy.visit('/');
    // Verify that the expected title appears on the page.
    cy.contains('Sky Tv+ Sky Cinema con Paramount+').should('be.visible');
  });

  // Test 2: Verify that the state is persisted in localStorage and rehydrates after a refresh
  it('persists state in localStorage and rehydrates after refresh', () => {
    cy.visit('/');
    // Ensure that the landing page is rendered.
    cy.contains('Sky Tv+ Sky Cinema con Paramount+').should('be.visible');
    // Check that localStorage has been populated with the state.
    cy.window().then((win) => {
      const storedState = win.localStorage.getItem('landingPagesState');
      expect(storedState, 'State is saved in localStorage').to.exist;
      const parsed = JSON.parse(storedState!);
      expect(parsed.state.landingPages.stackEntry.title).to.equal('Angular');
    });
    // Refresh the page.
    cy.reload();
    // Verify that the persisted state causes the UI to display the same content.
    cy.contains('Sky Tv+ Sky Cinema con Paramount+').should('be.visible');
  });


  it('scrolls down and clicks the Completa l\'acquisto button in the sticky bar', () => {
    cy.visit('/');
    // Scroll down 400 pixels vertically.
    cy.scrollTo(0, 400);
    // Click the button with data-cy attribute.
    cy.get('app-sticky-offer')
    .find('[data-cy="Completa l\'acquisto"]')
    .click();
  });

  it('opens the modal when clicking the Dettagli offerta button then closes the modal after 2000ms', () => {
    cy.visit('/');
    // Click on the button flagged with data-cy="Dettagli offerta"
    cy.get('[data-cy="Dettagli offerta"]').click();
    // Verify that the modal appears.
    cy.get('.modal-dialog').should('be.visible');
    // Wait for 2000 ms
    cy.wait(2000);
    // Click the close button within the modal
    cy.get('.btn-close').click();
    // Verify the modal is closed
    cy.get('.modal-dialog').should('not.exist');
  });

});
