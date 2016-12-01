$(document).ready( function() {
	$("#paginas_range").on("input", function(){
		$("#paginas_number").val( $(this).val() );
	});
	

	$("paginas_number").on("change", function() {
		$("#paginas_range").val( $(this).val() );
	});
	
	$("#paginas_number").on("keyup", function() {
		$("#paginas_range").val( $(this).val() );
	});

	$("#temas_range").on("input", function(){
		$("#temas_number").val( $(this).val() );
	});
	

	$("temas_number").on("change", function() {
		$("#temas_range").val( $(this).val() );
	});
	
	$("#temas_number").on("keyup", function() {
		$("#temas_range").val( $(this).val() );
	});

	var complejidad = {
		personal1: {
			descripcion: "descripcion 1",
			monto:80000
		},

		standard: {
			descripcion: "Excelente para pequeñas empresas",
			monto:100000
		},
		avanzado: {
			descripcion: "Excelente para pequeñas empresas cuando estan en proceso de crecimiento",
			monto:120000
		},
		profesional: {
			descripcion: "Excelente para proyectos que requieren cargos y mantenimientos",
			monto:140000
		},
		empresarial: {
			descripcion: "Calidad excepcional y construccion complejas del producto",
			monto:160000
		},
	};

	//explicita

	$("complejidad").on("change", function() {
		var indice = $(this).val();
		var objeto = complejidad[ indice ];
		$("#descripcion").html( 
			objeto.descripcion
		);


		//implicita
	$("#descripcion").html(
		complejidad[ $(this).val ()].descripcion
		);

	});

	var social = {
		facebook: 10000,
		twitter: 8000,
		blog: 5000,
		youtube: 15000,
	};

	$("form").on("submit", function(event) {
		event.preventDefauld();
	
		var precio_por_pagina = 5000;
		var monto_paginas = $("paginas_number").val() *
							precio_por_pagina;

		var precio_por_tema = 8000;
		var monto_temas = $("temas_number").var() +
							precio_por_tema;

		var precio_por_complejidad = 
		complejidad[ $("#complejidad").val() ].monto;

	var suma_social = 0;
	$.each( $(".social:checked"), function(1, obj) {
		suma_social += social[ $(obj).val() ];

	});

	var subtotal = monto_paginas +
					monto_tema +
					precio_por_complejidad +
					suma_social;

	var iva = $("#iva").prop("checked") ? (subtotal * 0.12) : 0;
	var total = subtotal + iva;

	var fecha_inicio = new Date( $("#fecha_inicio").val() );
	var fecha_fin = new Date( $("#fecha_fin").val() );

	var dias = (fecha_fin - fecha_inicio) / 1000 / 60 / 60 / 24;
	var horas = $("#horas").val();

	$("#monto_subtotal").html("Bs. " + subtotal.toFixed(2));
	$("#monto_iva").html("Bs. " + iva.toFixed(2));
	$("#monto_total").html("Bs. " + total.toFixed(2));
	$("#monto_honorarios").html("Bs. " + honorarios.toFixed(2) + " / horas");
	});


});