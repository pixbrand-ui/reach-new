<?php include('user_header.php'); ?>

<body>

	<section id="basic_info_sec" class="basic_info_sec">
		<div class="container">
			<div class="row">

				<div class="col-12 mb-4">
					<a href="edit_profile.php" class="f16 f400 clr_black mb-4">
						<i class="fa fa-chevron-left mr-2"></i>Go back
					</a>
					<h2 class="f32 f600 clr_black">
						Interested Topics
					</h2>
				</div>

				<div class="col-12 col-lg-7">

					<div class="cmn_white_part">
						<div class="row ml-0 mr-0">

							<form action="" class="w-100">

									<div class="col-12 mb-2">
										<div class="taginput">
											<label for="bio" class="f16 f400 clr_black mb-2 cursor_pointer w-100">Your Timezone</label>
											<input type="text" class='theme_input theme_input_2 w-100' data-role="tagsinput" value="Mobile Applications">
										</div>
									</div>

									<div class="col-12">
										<div class="d-flex justify-content-end">
											<a href="javascript:void(0)" class="theme_dark_btn f18 f600">Save</a>
										</div>
									</div>

							</form>

						</div>
					</div>
				</div>

				<div class="col-12 col-lg-5">
					
					<img src="./assets/img/interested_topics.svg" class="w-100">

				</div>
                
			</div>
		</div>
	</section>

</body>

<?php include('footer.php'); ?>