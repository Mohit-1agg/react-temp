import React from 'react'

const About = ({title}) => {
  return (
    <div>
	<title>{title}</title>
      	{/* BREADCRUMB */}
	<section class="bg-cherry pt-s3 pb-s3 text-white">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="d-lg-flex text-center">
						<div class="align-self-center mb-0--lg mb-s1--md mb-s1--sm mb-s1--xs">
							<h3 class="text-bold-400 text-size-s2 m-0 text-white">About Us</h3>
						</div>
						<div class="ml-auto align-self-center">
							<ol class="breadcrumb d-flex justify-content-center m-0 bg-none text-size-s1 p-0">
								<li class="breadcrumb-item"><a class="text-white" href="index.html">Home</a></li>
								<li class="breadcrumb-item" aria-current="page">About Us</li>
							</ol>
						</div>
					</div>
				</div>
			</div> {/* ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}
	{/* /BREADCRUMB */}

	<section class="bg-v5-light pt-s5 pb-s5 text-white">
		<div class="container pt-s3 pb-s3">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<div class="accordion" id="accordion-acc1">
						<div class="card border-none bg-none">
							<div id="headingOne-acc1-1">
								<h5 class="mb-0">
									<button class="btn btn-link btn-block text-uppercase text-size-14 text-bold-600 text-dark rounded-0 pl-0 pr-0 text-left text-cherry--active text-cherry--hover active collapsed pt-s1 pb-s1" type="button" data-toggle="collapse" data-target="#collapseOne-acc1-1" aria-expanded="true" aria-controls="collapseOne-acc1-1">
										<span class="mr-s1">
											<span>
												<i class="fa fa-plus hide"></i>
												<i class="fa fa-minus show"></i>
											</span>
										</span>
										Meet and Greet Airport Parking
									</button>
								</h5>
							</div>

							<div id="collapseOne-acc1-1" class="collapse show" aria-labelledby="headingOne-acc1-1" data-parent="#accordion-acc1">
								<div class="card-body p-s3 mt-s2 mb-s2 bg-white bs-solid bc-light bw-s1">
									<div class="mt-s3 mb-s3">
										<p class="m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="card border-none bg-none">
							<div id="headingTwo-acc1-2">
								<h5 class="mb-0">
									<button class="btn btn-link btn-block text-uppercase text-size-14 text-bold-600 text-dark rounded-0 pl-0 pr-0 text-left text-cherry--active text-cherry--hover collapsed pt-s1 pb-s1" type="button" data-toggle="collapse" data-target="#collapseTwo-acc1-2" aria-expanded="false" aria-controls="collapseTwo-acc1-2">
										<span class="mr-s1">
											<span>
												<i class="fa fa-plus hide"></i>
												<i class="fa fa-minus show"></i>
											</span>
										</span>
										How We Do This...?
									</button>
								</h5>
							</div>
							<div id="collapseTwo-acc1-2" class="collapse" aria-labelledby="headingTwo-acc1-2" data-parent="#accordion-acc1">
								<div class="card-body p-s3 mt-s2 mb-s2 bg-white bs-solid bc-light bw-s1">
									<div class="mt-s3 mb-s3">
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="card border-none bg-none">
							<div id="headingThree-acc1-3">
								<h5 class="mb-0">
									<button class="btn btn-link btn-block text-uppercase text-size-14 text-bold-600 text-dark rounded-0 pl-0 pr-0 text-left text-cherry--active text-cherry--hover collapsed pt-s1 pb-s1" type="button" data-toggle="collapse" data-target="#collapseThree-acc1-3" aria-expanded="false" aria-controls="collapseThree-acc1-3">
										<span class="mr-s1">
											<span>
												<i class="fa fa-plus hide"></i>
												<i class="fa fa-minus show"></i>
											</span>
										</span>
										The Best Parking Experience
									</button>
								</h5>
							</div>
							<div id="collapseThree-acc1-3" class="collapse" aria-labelledby="headingThree-acc1-3" data-parent="#accordion-acc1">
								<div class="card-body p-s3 mt-s2 mb-s2 bg-white bs-solid bc-light bw-s1">
									<ul class="mt-s3 mb-s3">
										<li class="mb-6">
											<div class="d-flex align-items-center">
												<span class="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
													<i class="icon-arrow-right"></i>
												</span>
												<p class="m-0">Secure parking service delivered by professional chauffeurs.</p>
											</div>
										</li>
										<li class="mb-6">
											<div class="d-flex align-items-center">
												<span class="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
													<i class="icon-arrow-right"></i>
												</span>
												<p class="m-0">Secure parking facility with regulated security measures.</p>
											</div>
										</li>
										<li class="mb-6">
											<div class="d-flex align-items-center">
												<span class="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
													<i class="icon-arrow-right"></i>
												</span>
												<p class="m-0">Short and easy booking process.</p>
											</div>
										</li>
										<li class="mb-6">
											<div class="d-flex align-items-center">
												<span class="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
													<i class="icon-arrow-right"></i>
												</span>
												<p class="m-0">Low prices.</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

	{/* TAGLINE */}
	<section class="bg-dark pt-s4 pb-s4">
		<div class="container">
			<div class="d-md-flex pt-s3 pb-s3 pl-s1 pr-s1">
				<div class="align-self-center pt-s2 pb-s2 pr-s4--lg">
					<h1 class="text-uppercase text-white mb-0">we are available 24/7</h1>
					{/* <h6 class="text-v5-white">Pellentesque egestas arcu elementum neque finibus iaculis. Vivamus bibendum, metus sit amet fermentum maximus</h6> */}
				</div>
				<div class="ml-auto align-self-center pt-s2 pb-s2">
					<a href="contact-us.html" class="btn btn-md text-white bs-solid bc-cherry bw-s4 bg-cherry text-uppercase text-size-s1 text-bold-600 rounded-0 box-shadow-v2-s1 box-shadow-v3-s2--hover hover-icon-wobble-horizontal">
						Contact Us
						<span>
							<i class="fa icon-earphones-alt hover-icon ml-s1"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
	</section>
	{/* /TAGLINE */}

	<section class="bg-v5-light pt-s5 pb-s5">
		<div class="container">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-8">
					<div class="mb-s3 text-center">
						<h1 class="text-bold-600 mb-s2 text-capitalize">Our latest news</h1>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="mt-s2 mb-s2 bg-white box-shadow-v1-s1 box-shadow-v1-s3--hover">
						<a href="#"><img class="img-responsive" src="images/news/1-720x435.jpg" alt="News"/></a>
						<div class="p-s3">
							<ul class="list-inline text-size-s1 text-bold-600 mb-6">
								<li class="list-inline-item">
									by John Doe
								</li>
								<li class="list-inline-item text-size-10">|</li>
								<li class="list-inline-item">
									May 10, 2018
								</li>
							</ul>
							<h2 class="text-size-20 text-bold-600 text-capitalize mb-12"><a class="text-cherry text-dark--hover" href="#">Phasellus porta eunisi</a></h2>
							<p class="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
							<div class="mt-20">
								<a class="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i class="fa fa-long-arrow-alt-right ml-5"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="mt-s2 mb-s2 bg-white box-shadow-v1-s1 box-shadow-v1-s3--hover">
						<a href="#"><img class="img-responsive" src="images/news/2-720x435.jpg" alt="News"/></a>
						<div class="p-s3">
							<ul class="list-inline text-size-s1 text-bold-600 mb-6">
								<li class="list-inline-item">
									by John Doe
								</li>
								<li class="list-inline-item text-size-10">|</li>
								<li class="list-inline-item">
									May 10, 2018
								</li>
							</ul>
							<h2 class="text-size-20 text-bold-600 text-capitalize mb-12"><a class="text-cherry text-dark--hover" href="#">vehicula lacus nunc</a></h2>
							<p class="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
							<div class="mt-20">
								<a class="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i class="fa fa-long-arrow-alt-right ml-5"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="mt-s2 mb-s2 bg-white box-shadow-v1-s1 box-shadow-v1-s3--hover">
						<a href="#"><img class="img-responsive" src="images/news/3-720x435.jpg" alt="News"/></a>
						<div class="p-s3">
							<ul class="list-inline text-size-s1 text-bold-600 mb-6">
								<li class="list-inline-item">
									by John Doe
								</li>
								<li class="list-inline-item text-size-10">|</li>
								<li class="list-inline-item">
									May 10, 2018
								</li>
							</ul>
							<h2 class="text-size-20 text-bold-600 text-capitalize mb-12"><a class="text-cherry text-dark--hover" href="#">semper velit benetis</a></h2>
							<p class="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
							<div class="mt-20">
								<a class="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i class="fa fa-long-arrow-alt-right ml-5"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div> {/* /ROW */}
			<div class="text-center mt-s5 pb-s2">
				<a href="blog.html" class="btn btn-lg bg-cherry text-white bg-dark--hover text-white--hover text-uppercase text-size-s1 text-bold-600 rounded-0 box-shadow-v2-s1 box-shadow-v3-s2--hover hover-icon-wobble-horizontal">
					View All
					<span>
						<i class="fa fa-list hover-icon ml-s1"></i>
					</span>
				</a>
			</div>
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default About
