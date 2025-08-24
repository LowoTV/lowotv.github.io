<details>
  <summary><h2>Tutorial</h2></summary>
  <h1>NKFlashServers</h1>
  Its almost the same as 
  <a href="https://github.com/GlennnM/FlashPrivateServer/blob/main/extra/Fiddler-guide.md">
    this guide
  </a> but with a modified 
  <a href="#6">step 6</a>.
  
  <h1>Fiddler Guide</h1>
  Fiddler allows you to replace the SWFs as they are being loaded. This allows for:<br>
  1. multiple archive instances connected to the server<br>
  2. browser clients connected to the server<br>
  3. self hosting/local servers (note that a separate powershell script for localhost swfs is also available)<br>

  <h2>First time setup:</h2>
  1. Install <a href="https://www.telerik.com/download/fiddler">Fiddler Classic</a> and open it.<br>
  2. On the menu bar, select Tools -> Options.<br>
  <img src="https://user-images.githubusercontent.com/77253453/174670742-faf229c2-3673-467a-85a0-04f4f1414fbc.png"><br>
  3. Select the "HTTPS" tab. Enable Decrypt HTTPS traffic. Choose "from non-browsers only".<br>
     Install whatever certificates it asks you to.<br>
     See below step 9 for instructions if you get an error configuring trust.<br>
  <img src="https://user-images.githubusercontent.com/77253453/174671525-88d40c45-a6e9-4cdc-b72b-c36996e2ca79.png"><br>
  4. Click "OK", then click "AutoResponder" on the right.<br>
  5. Check "Enable Rules" and "Unmatched requests passthrough", then click "Add Rule".<br>
  <img src="https://user-images.githubusercontent.com/77253453/174673035-4d78c2dd-6cce-4c12-9421-497c565243d8.png"><br><br>

  <h6 id="6">6</h6>
  Follow the instructions below depending on which game(s) you want to play, then proceed to step 7:<br>
  <b>BTD5s</b><br>
  Paste one of the following lines into the top text box:<br>
  <code>^https?://assets\.ninjakiwi\.com/Games/gameswfs/btd5-dat\.swf</code><br>
  <b>OR</b><br>
  <code>regex:https?://assets\.ninjakiwi\.com/Games/gameswfs/btd5-dat\.swf(\?.*)?$</code><br>
  *I'm not sure if this works but that's what I use.*<br><br>
  In the bottom text box, enter your SWF link:<br>
  <code>{wherever your swf is}</code><br>
  Click "Save".<br>
  <img src="https://user-images.githubusercontent.com/77253453/174720990-cb685426-e353-4aad-af80-155e6c2765de.png"><br><br>

  <h2>Optional steps</h2>
  1. Close all NK Archive windows and games. Press Win+R and paste:<br>
  <u>%appdata%/Ninja Kiwi Archive/Cache</u><br>
  then press OK.<br>
  <img src="https://user-images.githubusercontent.com/77253453/174675149-f9107ddd-d9b0-4592-bff0-57db6c5b67ac.png"><br>
  Clear this folder by selecting all files (Ctrl+A) and pressing Shift+Delete.<br>
  This ensures the game updates to use the server.<br>
  <img src="https://user-images.githubusercontent.com/77253453/174674847-2357b7d9-bdca-4378-9db8-b5af0d94e7cf.png"><br>
  1. Start the Ninja Kiwi Archive and then the game you wish to play!
</details>
