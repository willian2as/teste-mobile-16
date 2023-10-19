describe('Preenchimento Forms', () => {
    it('Preencher o menu forms', async () => {

        await $(`~Forms`).click()
        await $(`~text-input`).setValue('Formulario preenchido')
        await $(`~switch`).click()
        await $('~Dropdown').click()
        await $('android=new UiSelector().text("This app is awesome")').click()
        await driver.touchAction([ {action: 'longPress', x: 0, y: 1000}, { action: 'moveTo', x: 0, y: 10}, 'release' ]);
        await $('~button-Active').click()
                
        const message = await $('android=new UiSelector().text("This button is active")')
        await expect(message).toBeExisting()
    });

});