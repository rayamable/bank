var Show = (function() {
  var $btnNewTransaction;
  var $btnSave;
  var $inputAmount;
  var $modalTransaction;
  var $selectTransactionType;
  var $parameters; 

  var bankAccountId;

  var fetchElements = function() {
    $btnNewTransaction     = $("#btn-new-transaction");
    $btnSave               = $("#btn-save");
    $inputAmount           = $("#input-amount");
    $modalTransaction      = $("#modal-transaction");    
    $selectTransactionType = $("#select-transaction-type");
    $parameters            = $("#parameters");

    bankAccountId          = $parameters.data("bank-account-id");
  };

  var disableControls = function() {
    $btnSave.prop("disabled", true);
    $inputAmount.prop("disabled", true);
    $selectTransactionType.prop("disabled", true);
  }; 

  var enableControls = function() {
    $btnSave.prop("disabled", false);
    $inputAmount.prop("disabled", false);
    $selectTransactionType.prop("disabled", false);
  }; 

  var initializeEvents = function() {
    $btnNewTransaction.on("click", function() {
      $modalTransaction.modal("show");
   });

    $btnSave.on("click", function() {
      var amount          = $inputAmount.val();
      var transactionType = $selectTransactionType.val();
      disableControls();

      console.log("Amount: " + amount + "Transaction Type: " + transactionType + " Bank Account ID: " + bankAccountId);        
    });       
 };

 var init = function() {
    fetchElements();
    initializeEvents();
  };

  return {
    init: init
   };
 })();