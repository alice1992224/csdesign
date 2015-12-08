function open_vote_first_modal(){
	/*var title = $('#'+this.value+" .modal-body h2").html();
	$("#votepage h2").html(title);
	$("#votepage .candidate_id").val(this.value);
	$("#votecancel").val(this.value);
	*/
	$('#'+this.value).removeClass('fade');
	$('#'+this.value).css('display','block');
}

function close_vote_first_modal(){
	console.log('close');
	$(this).parents().filter('.portfolio-modal').addClass('fade');
	$(this).parents().filter('.portfolio-modal').css('display','none');	
}

function open_vote_second_modal(){
	close_vote_first_modal();
	$('#vote').removeClass('fade');
	$('#vote').css('display','block');
}

function close_vote_second_modal(){
	$('#vote').addClass('fade');
	$('#vote').css('display','none');
}

function open_upload_modal(){
	close_vote_first_modal();
	$('#upload').removeClass('fade');
	$('#upload').css('display','block');
}

$(".portfolio-link button").click(open_vote_first_modal);
$(".close-modal").click(close_vote_first_modal);
$(".close-vote-button").click(close_vote_first_modal);
$(".open-vote-button").click(open_vote_second_modal);
$('#votecancel').click(close_vote_second_modal);
$(".open-upload-button").click(open_upload_modal);

