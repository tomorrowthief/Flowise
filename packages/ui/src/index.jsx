import React from 'react'
import App from '@/App'
import { store } from '@/store'
import { createRoot } from 'react-dom/client'

// style + assets
import '@/assets/scss/style.scss'

// third party
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import ConfirmContextProvider from '@/store/context/ConfirmContextProvider'
import { ReactFlowContext } from '@/store/context/ReactFlowContext'

// 假设 `container` 是你要渲染 React 组件的 DOM 元素，例如一个 <div> 元素
const container = document.getElementById('root')

// 使用 React 18 的 createRoot API 创建一个 React 根容器
// 这是 React 18 中引入的新方法，替代了之前的 ReactDOM.render 方法
const root = createRoot(container)

// 现在可以使用 `root` 来渲染你的 React 组件
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider>
                    <ConfirmContextProvider>
                        <ReactFlowContext>
                            <App />
                        </ReactFlowContext>
                    </ConfirmContextProvider>
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
