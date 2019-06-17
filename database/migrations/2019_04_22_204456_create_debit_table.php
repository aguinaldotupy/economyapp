<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDebitTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debit', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('billingCycle_id')->unsigned();
            $table->string('name', 100);
            $table->decimal('value', 8, 2);
            $table->enum('status', ['PAGO', 'PENDENTE', 'AGENDADO']);
            $table->timestamps();
        });

        Schema::table('debit', function (Blueprint $table) {
            $table->foreign('billingCycle_id')->references('id')->on('billing_cycle');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('debit');
    }
}
