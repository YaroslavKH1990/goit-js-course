"use strict";

  const checkForSpam = function(message) {
    message = message.toLowerCase();
    if (message.indexOf('spam') !== -1) {
      return true;
    } else if (message.indexOf("sale") !== -1) {
      return true;
    } else {
      return false;
    };
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true