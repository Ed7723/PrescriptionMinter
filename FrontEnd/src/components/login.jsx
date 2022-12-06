import rxlogo from '../assets/logo.svg';

export default function Login() {
  return (
        <div className="h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-900">Sign In to Prescribe</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                            Email address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none block
                            w-full px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-gray-900 rounded-t-md
                            focus:outline-none focus:ring-gray-900/20
                            focus:border-900/20 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                            Password
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none block
                            w-full px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-gray-900 rounded-b-md
                            focus:outline-none focus:ring-gray-900/20
                            focus:border-900/20 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                            border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-brightBlue hover:veryLightBlue">
                            Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button className="w-full inline-block rounded-lg px-3 py-1.5 
                        font-semibold leading-6 text-gray-900 shadow-sm ring-1 
                        ring-gray-900/10 hover:ring-gray-900/20 hover:bg-veryLightBlue 
                        text-sm"> Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}