var littlebits;

var cloudBit_tokens = {
    device_id: '',
    access_token: ''
};

function setDeviceID(id) {
  cloudBit_tokens.device_id = id;
}

function setDeviceIDInput(){
  if (cloudBit_tokens.device_id !== '') {
    $('#deviceID').val(cloudBit_tokens.device_id);
  }
}

function setAccessToken(token) {
  cloudBit_tokens.access_token = token;
}

function setAccessTokenInput() {
  if (cloudBit_tokens.access_token !== '') {
    $('#access_token').val(cloudBit_tokens.access_token);
  }
}

function resetCloudBitTokens(){
  setDeviceID('');
  setAccessToken('');
}

function initSettingsInputs(){
  setDeviceIDInput();
  setAccessTokenInput();
}

function setCloutBitTokensFromForm(){
  cloudBit_tokens.device_id = $('#deviceID').val();
  cloudBit_tokens.access_token = $('#access_token').val();
}

$(document).ready(function() {
  initSettingsInputs();

  $('#clearSettings').on('click', function(e) {
    e.preventDefault();
    resetCloudBitTokens();
    setDeviceIDInput();
    setAccessTokenInput();
  });
  $('#saveSettings').on('click', function(e) {
    e.preventDefault();
    setCloutBitTokensFromForm();
  });
});
