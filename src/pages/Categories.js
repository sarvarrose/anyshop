import "../assets/styles/categories.css";
import product_image from '../assets/images/product-1.jpeg';

function Categories() {
    return  <>
         <div className="container">
               <div className="mobile_filter">
                  <button className=" " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" className="svg-inline--fa fa-filter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg> Filter
                  </button>
               </div>
               <div className="categories">
                        <div className="filter_sec">
                               <div className="filter_item">
                                    <span className="filter_title">Filter</span>
                                    <div className="form-check">
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_one"/>
                                                <label className="form-check-label" htmlFor="filter_one">
                                                      Filter 1
                                                </label>
                                          </div>
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_two"/>
                                                <label className="form-check-label" htmlFor="filter_two">
                                                      Filter 2
                                                </label>
                                          </div>
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_three"/>
                                                <label className="form-check-label" htmlFor="filter_three">
                                                      Filter 3
                                                </label>
                                          </div>
                                    </div>
                               </div>
                               {/* brand  */}
                               <div className="filter_item">
                                    <span className="filter_title">Brand</span>
                                    <div className="form-check">
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_four"/>
                                                <label className="form-check-label" htmlFor="filter_four">
                                                      Filter 1
                                                </label>
                                          </div>
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_five"/>
                                                <label className="form-check-label" htmlFor="filter_five">
                                                      Filter 2
                                                </label>
                                          </div>
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_six"/>
                                                <label className="form-check-label" htmlFor="filter_six">
                                                      Filter 3
                                                </label>
                                          </div>
                                    </div>
                               </div>
                               {/* price filter  */}
                               <div className="filter_item">
                                    <span className="filter_title">Price Filter</span>
                                    <div className="form-check">
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_seven"/>
                                                <label className="form-check-label" htmlFor="filter_seven">
                                                      Filter 1
                                                </label>
                                          </div>
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_eight"/>
                                                <label className="form-check-label" htmlFor="filter_eight">
                                                      Filter 2
                                                </label>
                                          </div>
                                          <div className="filers_i">
                                                <input className="form-check-input" type="checkbox" value="" id="filter_nine"/>
                                                <label className="form-check-label" htmlFor="filter_nine">
                                                      Filter 3
                                                </label>
                                          </div>
                                    </div>
                               </div>
                        </div>
                        <div className="categories_item">
                               <div className="ct_body">
                                     {/* item 1  */}
                                    <div className="ct_items">
                                          <a href="/">
                                                <div className="ct_img">
                                                <img src={product_image} alt="items" className="img-fluid" />
                                          </div>
                                          <div className="product_content_all">
                                                <span className="p_name">Product Name</span>
                                          </div>
                                          <div className="price_sec">
                                                <span className="fixed_price"> 
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      10,199
                                                </span>
                                                <span className="price">
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      1299.99
                                                </span>
                                                <span className="percent_off_price">33% Off</span>  
                                          </div>
                                          </a>
                                    </div>
                                     {/* item 2  */}
                                     <div className="ct_items">
                                          <a href="/">
                                                <div className="ct_img">
                                                <img src={product_image} alt="items" className="img-fluid" />
                                          </div>
                                          <div className="product_content_all">
                                                <span className="p_name">Product Name</span>
                                          </div>
                                          <div className="price_sec">
                                                <span className="fixed_price"> 
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      10,199
                                                </span>
                                                <span className="price">
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      1299.99
                                                </span>
                                                <span className="percent_off_price">33% Off</span>  
                                          </div>
                                          </a>
                                    </div>
                                     {/* item 3  */}
                                     <div className="ct_items">
                                          <a href="/">
                                                <div className="ct_img">
                                                <img src={product_image} alt="items" className="img-fluid" />
                                          </div>
                                          <div className="product_content_all">
                                                <span className="p_name">Product Name</span>
                                          </div>
                                          <div className="price_sec">
                                                <span className="fixed_price"> 
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      10,199
                                                </span>
                                                <span className="price">
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      1299.99
                                                </span>
                                                <span className="percent_off_price">33% Off</span>  
                                          </div>
                                          </a>
                                    </div>
                               </div>
                               {/* section 2  */}
                               <div className="ct_body">
                                     {/* item 1  */}
                                    <div className="ct_items">
                                          <a href="/">
                                                <div className="ct_img">
                                                <img src={product_image} alt="items" className="img-fluid" />
                                          </div>
                                          <div className="product_content_all">
                                                <span className="p_name">Product Name</span>
                                          </div>
                                          <div className="price_sec">
                                                <span className="fixed_price"> 
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      10,199
                                                </span>
                                                <span className="price">
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      1299.99
                                                </span>
                                                <span className="percent_off_price">33% Off</span>  
                                          </div>
                                          </a>
                                    </div>
                                     {/* item 2  */}
                                     <div className="ct_items">
                                          <a href="/">
                                                <div className="ct_img">
                                                <img src={product_image} alt="items" className="img-fluid" />
                                          </div>
                                          <div className="product_content_all">
                                                <span className="p_name">Product Name</span>
                                          </div>
                                          <div className="price_sec">
                                                <span className="fixed_price"> 
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      10,199
                                                </span>
                                                <span className="price">
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      1299.99
                                                </span>
                                                <span className="percent_off_price">33% Off</span>  
                                          </div>
                                          </a>
                                    </div>
                                     {/* item 3  */}
                                     <div className="ct_items">
                                          <a href="/">
                                                <div className="ct_img">
                                                <img src={product_image} alt="items" className="img-fluid" />
                                          </div>
                                          <div className="product_content_all">
                                                <span className="p_name">Product Name</span>
                                          </div>
                                          <div className="price_sec">
                                                <span className="fixed_price"> 
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      10,199
                                                </span>
                                                <span className="price">
                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rupee-sign" className="svg-inline--fa fa-rupee-sign fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
                                                      1299.99
                                                </span>
                                                <span className="percent_off_price">33% Off</span>  
                                          </div>
                                          </a>
                                    </div>
                               </div>
                        </div>
               </div>
         </div>         
    </>;
  }
  
  export default Categories;
  