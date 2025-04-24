// Update time and date
function updateDateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    timeElement.textContent = `${hours}:${minutes} ${ampm}`;
    
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    dateElement.textContent = `${month}/${day}/${year}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Window management
let windowCount = 0;
let activeWindow = null;
const windows = {};

function openWindow(type) {
    windowCount++;
    const windowId = `window-${windowCount}`;
    
    let windowContent = '';
    let windowTitle = '';
    let windowIcon = '';
    let windowWidth = '500px';
    let windowHeight = '400px';
    
    switch(type) {
        case 'explorer':
            windowTitle = 'File Explorer';
            windowIcon = 'https://win11.blueedge.me/img/icon/explorer.png';
            windowContent = `
                <div class="flex h-full">
                    <div class="w-48 bg-gray-800 p-2">
                        <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                            <i class="fas fa-home mr-2 text-blue-400"></i>
                            <span>Home</span>
                        </div>
                        <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                            <i class="fas fa-desktop mr-2 text-blue-400"></i>
                            <span>Desktop</span>
                        </div>
                        <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                            <i class="fas fa-download mr-2 text-blue-400"></i>
                            <span>Downloads</span>
                        </div>
                        <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                            <i class="fas fa-image mr-2 text-blue-400"></i>
                            <span>Pictures</span>
                        </div>
                        <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                            <i class="fas fa-music mr-2 text-blue-400"></i>
                            <span>Music</span>
                        </div>
                        <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                            <i class="fas fa-film mr-2 text-blue-400"></i>
                            <span>Videos</span>
                        </div>
                    </div>
                    <div class="flex-1 p-4 overflow-auto">
                        <div class="grid grid-cols-5 gap-4">
                            <div class="flex flex-col items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <i class="fas fa-folder text-yellow-400 text-3xl mb-1"></i>
                                <span class="text-xs text-center">Documents</span>
                            </div>
                            <div class="flex flex-col items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <i class="fas fa-folder text-yellow-400 text-3xl mb-1"></i>
                                <span class="text-xs text-center">Downloads</span>
                            </div>
                            <div class="flex flex-col items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <i class="fas fa-folder text-yellow-400 text-3xl mb-1"></i>
                                <span class="text-xs text-center">Pictures</span>
                            </div>
                            <div class="flex flex-col items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <i class="fas fa-folder text-yellow-400 text-3xl mb-1"></i>
                                <span class="text-xs text-center">Music</span>
                            </div>
                            <div class="flex flex-col items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <i class="fas fa-folder text-yellow-400 text-3xl mb-1"></i>
                                <span class="text-xs text-center">Videos</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            windowWidth = '800px';
            windowHeight = '500px';
            break;
            
        case 'edge':
            windowTitle = 'Microsoft Edge';
            windowIcon = 'https://win11.blueedge.me/img/icon/edge.png';
            windowContent = `
                <div class="flex flex-col h-full">
                    <div class="flex items-center bg-gray-800 p-2">
                        <div class="flex space-x-2 mr-4">
                            <i class="fas fa-arrow-left text-gray-400"></i>
                            <i class="fas fa-arrow-right text-gray-400"></i>
                            <i class="fas fa-redo text-gray-400"></i>
                        </div>
                        <div class="flex-1 relative">
                            <input type="text" value="https://www.bing.com" class="w-full bg-gray-700 rounded-full py-1 px-4 text-sm focus:outline-none">
                            <i class="fas fa-search absolute right-3 top-1.5 text-gray-400 text-sm"></i>
                        </div>
                        <div class="flex space-x-2 ml-4">
                            <i class="fas fa-star text-gray-400"></i>
                            <i class="fas fa-ellipsis-h text-gray-400"></i>
                        </div>
                    </div>
                    <div class="flex-1 bg-white text-black p-4 overflow-auto">
                        <h1 class="text-2xl font-bold mb-4">Welcome to Microsoft Edge</h1>
                        <p class="mb-4">This is a simulation of the Microsoft Edge browser in Windows 11.</p>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="p-4 border rounded cursor-pointer hover:bg-gray-100">
                                <h3 class="font-bold mb-2">Bing</h3>
                                <p class="text-sm">Search the web</p>
                            </div>
                            <div class="p-4 border rounded cursor-pointer hover:bg-gray-100">
                                <h3 class="font-bold mb-2">Outlook</h3>
                                <p class="text-sm">Email and calendar</p>
                            </div>
                            <div class="p-4 border rounded cursor-pointer hover:bg-gray-100">
                                <h3 class="font-bold mb-2">Office</h3>
                                <p class="text-sm">Create and edit documents</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            windowWidth = '900px';
            windowHeight = '600px';
            break;
            
        case 'store':
            windowTitle = 'Microsoft Store';
            windowIcon = 'https://win11.blueedge.me/img/icon/store.png';
            windowContent = `
                <div class="flex flex-col h-full">
                    <div class="flex items-center bg-gray-800 p-2">
                        <div class="flex space-x-2 mr-4">
                            <i class="fas fa-arrow-left text-gray-400"></i>
                            <i class="fas fa-arrow-right text-gray-400"></i>
                        </div>
                        <div class="flex-1 relative">
                            <input type="text" placeholder="Search the store" class="w-full bg-gray-700 rounded-full py-1 px-4 text-sm focus:outline-none">
                            <i class="fas fa-search absolute right-3 top-1.5 text-gray-400 text-sm"></i>
                        </div>
                    </div>
                    <div class="flex-1 bg-gray-100 text-black p-4 overflow-auto">
                        <h1 class="text-2xl font-bold mb-6">Microsoft Store</h1>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="bg-white rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-lg transition">
                                <img src="https://store-images.s-microsoft.com/image/apps.37935.9007199266246367.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b2eb-9734-4f6e-85d6-5680d2d9e7e1" class="w-full h-32 object-cover">
                                <div class="p-3">
                                    <h3 class="font-bold">Spotify</h3>
                                    <p class="text-sm text-gray-600">Music streaming</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-lg transition">
                                <img src="https://store-images.s-microsoft.com/image/apps.46936.9007199266246367.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b2eb-9734-4f6e-85d6-5680d2d9e7e1" class="w-full h-32 object-cover">
                                <div class="p-3">
                                    <h3 class="font-bold">Netflix</h3>
                                    <p class="text-sm text-gray-600">TV shows and movies</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-lg transition">
                                <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266246367.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b2eb-9734-4f6e-85d6-5680d2d9e7e1" class="w-full h-32 object-cover">
                                <div class="p-3">
                                    <h3 class="font-bold">Zoom</h3>
                                    <p class="text-sm text-gray-600">Video conferencing</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-lg transition">
                                <img src="https://store-images.s-microsoft.com/image/apps.51284.9007199266246367.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b2eb-9734-4f6e-85d6-5680d2d9e7e1" class="w-full h-32 object-cover">
                                <div class="p-3">
                                    <h3 class="font-bold">Disney+</h3>
                                    <p class="text-sm text-gray-600">Movies and shows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            windowWidth = '900px';
            windowHeight = '600px';
            break;
            
        case 'settings':
            windowTitle = 'Settings';
            windowIcon = 'https://win11.blueedge.me/img/icon/settings.png';
            windowContent = `
                <div class="flex h-full">
                    <div class="w-48 bg-gray-800 p-4">
                        <h2 class="font-bold mb-4">Settings</h2>
                        <div class="space-y-2">
                            <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                                <i class="fas fa-wifi mr-2"></i>
                                <span>Network & Internet</span>
                            </div>
                            <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                                <i class="fas fa-volume-up mr-2"></i>
                                <span>Sound</span>
                            </div>
                            <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                                <i class="fas fa-bell mr-2"></i>
                                <span>Notifications</span>
                            </div>
                            <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                                <i class="fas fa-power-off mr-2"></i>
                                <span>System</span>
                            </div>
                            <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                                <i class="fas fa-desktop mr-2"></i>
                                <span>Display</span>
                            </div>
                            <div class="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center">
                                <i class="fas fa-user mr-2"></i>
                                <span>Accounts</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 p-6 overflow-auto">
                        <h1 class="text-2xl font-bold mb-6">System</h1>
                        <div class="space-y-6">
                            <div>
                                <h2 class="font-bold mb-2">Display</h2>
                                <div class="bg-gray-700 p-4 rounded">
                                    <div class="flex items-center justify-between mb-4">
                                        <span>Brightness</span>
                                        <div class="w-48 bg-gray-600 h-2 rounded-full">
                                            <div class="bg-blue-500 h-2 rounded-full w-3/4"></div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span>Night light</span>
                                        <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                            <input type="checkbox" id="night-light" class="sr-only">
                                            <label for="night-light" class="block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer">
                                                <span class="block h-6 w-6 rounded-full bg-white transform translate-x-4"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 class="font-bold mb-2">Storage</h2>
                                <div class="bg-gray-700 p-4 rounded">
                                    <div class="w-full bg-gray-600 h-4 rounded-full mb-2">
                                        <div class="bg-blue-500 h-4 rounded-full w-2/3"></div>
                                    </div>
                                    <div class="text-sm">63.5 GB of 256 GB used</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            windowWidth = '800px';
            windowHeight = '500px';
            break;
            
        default:
            windowTitle = 'New Window';
            windowIcon = 'https://win11.blueedge.me/img/icon/explorer.png';
            windowContent = `
                <div class="p-4">
                    <h1 class="text-xl font-bold mb-4">Welcome to Windows 11 Simulator</h1>
                    <p>This is a simulation of a Windows 11 window. You can drag, resize, minimize, maximize, and close this window.</p>
                </div>
            `;
    }
    
    const windowElement = document.createElement('div');
    windowElement.id = windowId;
    windowElement.className = 'window bg-gray-800 hidden';
    windowElement.style.width = windowWidth;
    windowElement.style.height = windowHeight;
    windowElement.style.top = '50px';
    windowElement.style.left = `${50 + (windowCount * 30)}px`;
    
    windowElement.innerHTML = `
        <div class="window-header flex items-center justify-between bg-gray-900 p-2">
            <div class="flex items-center">
                <img src="${windowIcon}" class="w-4 h-4 mr-2">
                <span class="text-sm">${windowTitle}</span>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-4 h-4 flex items-center justify-center hover:bg-gray-700 rounded cursor-pointer">
                    <i class="fas fa-minus text-xs"></i>
                </div>
                <div class="w-4 h-4 flex items-center justify-center hover:bg-gray-700 rounded cursor-pointer">
                    <i class="fas fa-square text-xs"></i>
                </div>
                <div class="w-4 h-4 flex items-center justify-center hover:bg-red-500 rounded cursor-pointer" onclick="closeWindow('${windowId}')">
                    <i class="fas fa-times text-xs"></i>
                </div>
            </div>
        </div>
        <div class="window-content h-full overflow-auto">
            ${windowContent}
        </div>
    `;
    
    document.getElementById('windows-container').appendChild(windowElement);
    
    // Make window draggable
    makeDraggable(windowElement);
    
    // Show window
    setTimeout(() => {
        windowElement.classList.remove('hidden');
        setActiveWindow(windowId);
    }, 10);
    
    // Store window reference
    windows[windowId] = {
        element: windowElement,
        type: type,
        minimized: false
    };
    
    return windowId;
}

function closeWindow(windowId) {
    if (windows[windowId]) {
        windows[windowId].element.remove();
        delete windows[windowId];
        
        // If we're closing the active window, set another window as active
        if (activeWindow === windowId) {
            activeWindow = null;
            const remainingWindows = Object.keys(windows);
            if (remainingWindows.length > 0) {
                setActiveWindow(remainingWindows[0]);
            }
        }
    }
}

function setActiveWindow(windowId) {
    if (activeWindow) {
        windows[activeWindow].element.classList.remove('active');
    }
    
    activeWindow = windowId;
    windows[windowId].element.classList.add('active');
    
    // Bring to front
    windows[windowId].element.style.zIndex = '100';
    
    // Update other windows' z-index
    Object.keys(windows).forEach(id => {
        if (id !== windowId) {
            windows[id].element.style.zIndex = '10';
        }
    });
}

function makeDraggable(element) {
    const header = element.querySelector('.window-header');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    header.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Get current mouse position
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Set active window
        setActiveWindow(element.id);
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Calculate new position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Set new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Start Menu
function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    if (startMenu.classList.contains('hidden')) {
        startMenu.classList.remove('hidden');
    } else {
        startMenu.classList.add('hidden');
    }
}

// Close start menu when clicking elsewhere
document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('start-menu');
    const startButton = document.querySelector('.taskbar-icon:first-child');
    
    if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
        startMenu.classList.add('hidden');
    }
});

// Context Menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    const contextMenu = document.getElementById('context-menu');
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.classList.remove('hidden');
    
    // Close when clicking elsewhere
    const closeContextMenu = () => {
        contextMenu.classList.add('hidden');
        document.removeEventListener('click', closeContextMenu);
    };
    
    setTimeout(() => {
        document.addEventListener('click', closeContextMenu);
    }, 10);
});

// Open default window on load
window.onload = () => {
    openWindow('explorer');
};

        