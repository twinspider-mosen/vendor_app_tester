const find = require('appium-flutter-finder')

describe('Order Acceptance', () => {
    it('should login with valid credentials', async () => {
      const email = find.byValueKey('login_username');
      const password = find.byValueKey('login_pass');
      const loginBtn = find.byValueKey('login_btn');    
      const drawer = find.byValueKey('openDrawer_key');
      const recentOrders = find.byValueKey('recent_order_key');
      const requiredItem = find.byText('Recent Orders');
      // const newOrder = find.byValueKey('newOrder_key');
      // const orderList = find.byType('ListView');
    

      // const orderTile = find.descendant()
      const prepTime = find.byValueKey('prepTime_key');
      const accept = find.byValueKey('accept_order');




      await driver.execute('flutter:waitFor', email);
      await driver.elementSendKeys(email, 'vendor1');
      await driver.execute('flutter:waitFor', password);
      await driver.elementSendKeys(password, 'bento1234');


      await driver.elementClick(loginBtn);
  
      await driver.pause(5000) // wait for 20 seconds
      await driver.elementClick(drawer);
      await driver.pause(5000) // wait for 20 seconds
      // await driver.elementClick(recentOrders);
      await driver.elementClick(requiredItem);
      await driver.pause(5000) // wait for 20 seconds
      await driver.execute('flutter:waitFor', prepTime);
      await driver.elementSendKeys(email, '10');
      await driver.elementClick(accept);



    


       
        })
    })
    

  


