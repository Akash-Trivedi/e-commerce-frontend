import React from 'react';

export default function Registration() {
    let data={
        'contact':'',
        'password':''
    }
    function checkPassword(event) {
    var a= document.getElementById('password-match');

        if(event.target.value!=data['password']){
            a.style.display='inline-block';
        } else{
            a.style.display='none';
        }
    }

    function updateData(event) {
        data[event.target.name]=event.target.value;
    }

    function showContent(event) {
        if (document.getElementById('password1').type == 'password') {
            document.getElementById('password1').type = 'text';
            document.getElementById('password2').type = 'text';
        } else {
            document.getElementById('password1').type = 'password';
            document.getElementById('password2').type = 'password';
        }

    }
    return (
        <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="pt-4 text-2xl text-center">Register your Brand !</h3>
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method='POST' action='localhost:8000/publisher/register'>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                    Contact
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="contact"
                                    type="text"
                                    name='contact'
                                    placeholder="+91"
                                    required
                                    onChange={updateData}
                                />
                            </div>
                        </div>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password1"
                                    type="password"
                                    placeholder="******************"
                                    required
                                    name='password'
                                    onChange={updateData}
                                />

                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                    Confirm Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password2"
                                    type="password"
                                    placeholder="******************"
                                    required
                                    name='password2'
                                    onChange={checkPassword}
                                />
                            </div>

                        </div>
                        <p id='password-match' className="mb-2 text-sm font-bold text-gray-700" style={{'display':'none', 'color':'red'}}>passwords does not match</p>
                        <p>
                            <input type="checkbox" onClick={showContent} id="showPassword" />
                            <label htmlFor="showPassword" className='text-sm font-bold'>show password</label>
                        </p>
                        <div className="mb-6 text-center">
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Register Account
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center">
                            <a
                                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                href="./index.html"
                            >
                                Already have an account? Login!
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}