<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\billingCycle;

class billingCycleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $billingCycle = billingCycle::all();
        $credits = \App\credit::all();
        $debits = \App\debit::all();
        foreach ($billingCycle as $BC) {}
        foreach ($credits as $cr)

        $data [] = [
            'id'        => $BC->id,
            'credits'   => $credits,
            'debts'     => $debits,
            'name'      => $BC->name,
            'year'      => $BC->year
        ];

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $billingCycle = billingCycle::insert($request->all());

        return response()->json($billingCycle);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $billingCycle = billingCycle::find($id);

        return response()->json($billingCycle);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $billingCycle = billingCycle::findOrFail($id);
        $billingCycle->update($request->all());

        return response()->json($billingCycle);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        billingCycle::find($id)->delete();

		return response()->json([], 204);
    }
}
