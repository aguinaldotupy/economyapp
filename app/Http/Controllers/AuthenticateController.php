<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{
    /**
     * Function Authenticate
     * On success return JWT Auth Token
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }

    /**
     * Function Logout
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
        ]);

        JWTAuth::invalidate($request->input('token'));
    }

    /**
     * Returns the authenticated user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticateUser(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        unset($user->company_id, $user->created_at, $user->updated_at);

        return response()->json(compact('user'));
    }

    /**
     * Function GetToken
     * refresh the token
     *
     * @return mixed
     */
    public function getToken()
    {
        $token = JWTAuth::getToken();

        if (!$token) {
            return response()->json(['token_absent'], 405);
        }

        try {
            $refreshedToken = JWTAuth::refresh($token);
        } catch (JWTExcepetion $e) {
            return response()->json(['Not able to refresh Token'], 500);
        }

        return response()->json(['token' => $refreshedToken], 200);
    }
}
