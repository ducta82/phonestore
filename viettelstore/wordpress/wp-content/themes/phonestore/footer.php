<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package phonestore
 */
echo get_product_by_id();
?>
<div id="popup_payment1" class="dialog1" style="display: none;">
    <div class="signup-ct">
        <div class="signup-header">
            <h4>Đặt hàng - nghe tư vấn miễn phí</h4>
            <h6 style="text-align: center; margin-top: -5px; margin-bottom: 3px; color: #fff;">(Mua là quyền của bạn - Tư vấn miễn phí là trách nhiệm của chúng tôi)</h6>
            <a class="modal_close" href="#"><i class="fa fa-close"></i></a>
        </div>
        <div class="form_payment">
            <div class="form_infor margin-right-20 margin-left-10">
                <div class="pro_infor">
                    <h3 id="step1" style="text-transform: none; border-bottom: none;" class="title">Bước 1: Chọn màu</h3>
                    <div id="Gen1spThanhToan">

                    <!-- BEGIN show1product -->
                    <table>
                        <tbody><tr>
                            <td>
                                <input type="hidden" id="pUrl" value="http://viettelstore.vn/dien-thoai/sony-xperia-xz-pid108336.html">
                                <img alt="sony-xperia-xz" class="img_payment" src="http://cdn.viettelstore.vn/images/Product/ProductImage/small/xss.jpg">
                            </td>
                            <td>

                                <div class="choice_color" id="pi_checker" data-choosefeaturetype="0">
                                    
                                </div>
                                <h3>Sony Xperia XZ</h3>
                                <div class="price" style="margin-top: 7px;">
                                    <span class="price-new" id="pi_price_new">14.990.000 ₫</span>
                                    
                                </div>
                            </td>
                        </tr>
                    </tbody></table>

                    <div style="padding-top: 15px; clear: both; ">
                        <div id="Gen1spThanhToan_QT2">
                            <div class="promotion margin-bottom-5">
                                <div class="title_pro">
                                    Khuyến mãi
                                </div>
                                <ul class="no-tick">
                                    <li><span class="c2">* Ưu đãi quà tặng dành cho khách hàng đặt hàng:<br>
                    - Trả góp: Ưu đãi lãi suất 0%, trả trước 30%, kỳ hạn 6 tháng<br>
                    - Tai nghe Sony Xperia XA MDR-ZX110AP/WCE<br>
                    - Pin sạc dự phòng Eloop E9 - 10000 mAh<br>
                    - Túi du lịch Xperia</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <script type="text/javascript">
                        $('#pi_checker .color-check').click(function () {
                            $('#pi_checker .color-check').removeClass('check');
                            $(this).addClass('check');
                        });
                    </script>

                    <script type="text/javascript">
                        try {
                            $('.simSo_showCls').hide(); $('.dienThoai_showCls').show();
                        }
                        catch (ex) { }
                    </script>
                    <!-- END show1product -->
                    </div>
                    <div class="box_payment_option" style="text-align: left; margin-top: 5px;">
                        <ul class="payment_option">
                            <li>
                                <label class="chk123" style="margin-top: 3px;">
                                    <input type="checkbox" value="2" id="chkHinhThucThanhToan" checked="checked">
                                    Hình thức thanh toán
                                </label>
                                <div class="form-group w-icon chk114" id="cardpayment1">
                                    <label class="radio-inline">
                                        <input type="radio" value="fa7aa975-8628-450c-b84b-3304056ccfd7" name="card_paymentTypes" class="infor_user">
                                        Giao hàng thu tiền tại nhà
                                    </label>
                                </div>
                                <label class="radio-inline">
                                    <input type="radio" value="e6551df2-083c-41b2-87e1-c9cc105f8a9c" name="card_paymentTypes" class="infor_user">
                                    Chuyển khoản Ngân hàng
                                    
                                </label>
                                <div class="desc">Thông tin tài khoản thụ hưởng của Viettelstore.  Sau khi chuyển khoản, xin vui lòng thông báo cho chúng tôi qua tổng đài <strong>1800 8123</strong> để được phục vụ nhanh nhất.
                                <br>                                                   
                                Ngân hàng: <strong>Ngân hàng TM Cổ phần Quân Đội</strong><br>
                                Chi nhánh: Trần Duy Hưng
                                <br>
                                Tên tài khoản: Công ty TNHH NN MTV TM &amp; XNK Viettel
                                <br>
                                Số tài khoản: <strong>0051133999888</strong>
                                </div>
                                <p style="margin-top: 10px;">
                                    Hướng dẫn thanh toán xem chi tiết <a href="/tin-tuc/phuong-thuc-thanh-toan-014002.html" style="font-weight: bold; color: #F83015; text-decoration: underline; margin-top: 10px;">tại đây</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form_infor">
                <h3 id="step2" class="title" style="text-transform: none;">Bước 2: Thông tin người mua</h3>
                <div class="form-group w-icon hidden">
                    <label class="radio-inline" style="padding-left: 0;">
                        <span style="float: left; padding-right: 25px;">Anh</span>
                        <input type="radio" class="infor_user" name="inlineRadioOptions" id="Radio4" value="option1">
                    </label>
                    <label class="radio-inline" style="padding-left: 0;">
                        <span style="float: left; padding-right: 25px;">Chị</span>
                        <input type="radio" class="infor_user" name="inlineRadioOptions" id="Radio5" value="option2">
                    </label>
                </div>
                <table>
                    <tbody><tr>
                        <td>
                            <div class="box-select" style="margin: 0 10px 10px 0">
                                <select class="drop-city" id="inlineRadioOptions" style="width: 65px">
                                    <option value="1">Anh</option>
                                    <option value="2">Chị</option>
                                </select>
                            </div>
                        </td>
                        <td style="width: 100%">
                            <div class="form-group w-icon">
                                <input type="text" placeholder="Họ và tên (*)" class="form-control" id="popup_payment_inp_hoten">
                            </div>
                        </td>
                    </tr>
                </tbody></table>
                <div class="form-group w-icon">
                    <input type="text" placeholder="Số điện thoại (*)" class="form-control" id="popup_payment_inp_sdt">
                </div>
                <div class="form-group w-icon simSo_showCls" id="popup_payment_inp_cmnd_div" style="display: none;">
                    <input type="text" placeholder="Số Chứng minh nhân dân (*)" class="form-control" id="popup_payment_inp_cmnd" style="display: none;">
                </div>
                <div class="form-group w-icon dienThoai_showCls">
                    <input type="text" placeholder="Email" class="form-control" id="popup_payment_inp_email">
                </div>

                <div id="payment-online" class="box">

                    <label class="chk123" style="color: #333; display: none;">
                        <input type="checkbox" value="1" id="chkNhapDiaChi">
                        Nhập địa chỉ, thời gian để NHẬN HÀNG NHANH HƠN
                    </label>
                <input id="hidProductId" value="108336" type="hidden">
                <div class="btn-fld">
                    <a href="javascript:void(0);" id="buynow1" class="btn btn-buynow">Xác nhận</a>
                </div>
                <div class="margin-top-15">
                    <p class="advisory"><i class="icons pop-tu-van" style="margin-top: 0;"></i><span>Tư vấn bán hàng <strong style="color: #F83015; font-size: 18px; font-weight: bold;">1800 8123</strong></span></p>
                    <ul class="u1">
                        <li style="margin-bottom: 10px;"><i class="icons pop-giao-hang"></i>Giao hàng miễn phí (nếu cách Viettel Store dưới 10km)</li>
                        <li><i class="icons pop-bao-hanh"></i>Bảo hành chính hãng</li>
                    </ul>
                </div>
                <br>
            </div>
        </div>
    </div>
</div>
</div>
<!-- Begin Footer -->
<footer class="container-fluid">
    <div class="row">
        <div class="container container-fixed">
            <div class="row cam-ket">
                <div class="col-lg-6">
                    <div class="row item2">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="row">
                                <div class="col-lg-5 col-md-3 col-sm-4 col-xs-4 it-cam-ket">
                                    <i class="icons ck06"></i>
                                </div>
                                <div class="col-lg-7 col-md-9 col-sm-8 col-xs-8">
                                    <div class="row">
                                    <h5>Sản phẩm</h5>
                                    <h4>CHÍNH HÃNG</h4>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="row">
                                <div class="col-lg-5 col-md-3 col-sm-4 col-xs-4 it-cam-ket">
                                    <i class="icons ck08"></i>
                                    
                                </div>
                                <div class="col-lg-7 col-md-9 col-sm-8 col-xs-8">
                                    <div class="row">
                                    <h5>Giao hàng tận nơi</h5>
                                    <h4>63 TỈNH THÀNH</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row item2">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="row">
                                <div class="col-lg-5 col-md-3 col-sm-4 col-xs-4 it-cam-ket">
                                    <i class="icons ck10"></i>
                                </div>
                                <div class="col-lg-7 col-md-9 col-sm-8 col-xs-8">
                                    <div class="row">
                                    <h5>Tư vấn miễn phí</h5>
                                    <a href="tel:18008123"><h4>1800 8123</h4></a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="row">
                                <div class="col-lg-5 col-md-3 col-sm-4 col-xs-4 it-cam-ket">
                                    <i class="icons ck03"></i>
                                </div>
                                <div class="col-lg-7 col-md-9 col-sm-8 col-xs-8">
                                    <div class="row">
                                    <h5>Chính sách đổi trả</h5>
                                    <h4>LINH HOẠT</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <div class="row">
                                <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                                <a href="tel:18008123">
                                    <p>
                                        <span class="color_ff6600">1800 8123 </span>: Tư vấn bán hàng
                                    </p>
                                </a>
                                <a href="tel:19008096">
                                    <p>
                                        <span class="color_ff6600">1900 8096 </span>: Khiếu nại, Bảo hành
                                    </p>
                                </a>                                
                                <p>
                                    Thời gian làm việc: <span class="color_ff6600">8h - 22h </span>
                                </p>
                                <a href="mailto:hanhntp@viettelstore.vn">
                                    <p>Góp ý: <span class="color_333333">hanhntp@viettelstore.vn</span></p>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                                <a href="/cau-hoi-thuong-gap.html">
                                    <p>Những câu hỏi thường gặp</p>
                                </a>
                                <a href="/phuong-thuc-thanh-toan.html">
                                    <p>Phương thức thanh toán</p>
                                </a>
                                <a href="/huong-dan-dat-hang.html">
                                    <p>Hướng dẫn đặt hàng</p>
                                </a>
                                <a href="/thong-tin-don-hang.html">
                                    <p>Tra cứu đơn hàng trực tuyến</p>
                                </a>
                                <a href="/bao-hanh.html">
                                    <p style="color: red !important;">Tìm trung tâm bảo hành</p>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <h4>CHÍNH SÁCH</h4>
                                <a href="/chinh-sach-giao-hang.html">
                                    <p>Chính sách giao hàng</p>
                                </a>
                                
                                <a href="/chinh-sach-doi-tra-san-pham.html">
                                    <p>Chính sách đổi sản phẩm</p>
                                </a>
                                <a href="/chinh-sach-bao-hanh.html">
                                    <p>Chính sách bảo hành</p>
                                </a>
                                <a href="/chinh-sach-bao-mat.html">
                                    <p>Chính sách bảo mật</p>
                                </a>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="row">
                        <div class="col-xs-8">
                            <div class="row">
                                <h4>VIETTEL STORE</h4>
                                <div class="col-xs-6">
                                    <div class="row">
                                        <a href="/sieu-thi-gan-nhat.html">
                                            <p style="color: red;">Siêu thị gần nhất (291)</p>
                                        </a>
                                        <a href="/danh-muc-tin/tu-van-su-dung-011.html">
                                            <p>Tư vấn sử dụng</p>
                                        </a>
                                        <a href="/tin-tuc/danh-gia-san-pham-012006.html">
                                            <p>Đánh giá sản phẩm</p>
                                        </a>
                                        <a href="/tin-tuc/benh-vien-cong-nghe-012009.html">
                                            <p>Bệnh viện công nghệ</p>
                                        </a>
                                        <a href="/lien-he.html">
                                            <p>Liên hệ</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="row">
                                        <a href="/tin-tuc/tin-cong-nghe-012007.html">
                                            <p>Tin công nghệ</p>
                                        </a>
                                        <a href="/danh-muc-tin/khuyen-mai-015.html">
                                            <p>Tin khuyến mãi</p>
                                        </a>
                                        <a href="/tin-tuc/tin-tuyen-dung-012004.html">
                                            <p>Tin tuyển dụng</p>
                                        </a>
                                        <a href="/tin-tuc/tin-viettel-012005.html">
                                            <p>Tin Viettel</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <h4>LIÊN KẾT</h4>
                                <p class="group-xh">
                                    <a href="https://www.facebook.com/ViettelstoreOnline">
                                        <i class="icons f"></i>
                                    </a>
                                    <a href="https://plus.google.com/u/2/114541331116294436002/posts?hl=en">
                                        <i class="icons g"></i>
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=eviettel.eviettel">
                                        <i class="icons a"></i>
                                    </a>
                                </p>
                                <h4 style="margin-top: 10px; margin-bottom: 0;">CHỨNG NHẬN</h4>
                                <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=11221">
                                    <p>
                                        <i class="icons cnbct" title="Đã đăng ký với bộ công thương"></i>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row line">
                <h4>CÔNG TY THƯƠNG MẠI VÀ XUẤT NHẬP KHẨU VIETTEL</h4>
                <p>Đăng ký doanh nghiệp số 0104831030, do Sở Kế hoạch và Đầu tư Hà Nội cấp lần đầu ngày 25/01/2006, thay đổi lần thứ 30 ngày 14/11/2014.</p>
                <p>Địa chỉ: Tầng 7, Tòa nhà Việt Á, Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
                <p>
                    Coppyright © 2016 Viettel Store. All Rights Reserved
                </p>
                <p>
                    <a href="/?setview=mobile"><span class="color_ff6600">
                        <i class="icons mb"></i>
                        Xem bản mobile
                    </span></a>
                </p>
            </div>
            <div class="row">
                
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->
<style type="text/css">
    footer {
        background-repeat: repeat-x;
        background-position: top center;
        margin-bottom: -30px;
    }
</style>
<!-- scrollToTop -->
<div class="scrollToTop">
    <i class="icons scrolltop" title="ScrollToTop"></i>
</div>
<script type="text/javascript">
    $(function () {
        NProgress.settings.template = '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"></div>';
        $(document).on('ajaxStart', function () { NProgress.start(); });
        $(document).on('ajaxComplete', function () { NProgress.done(); });
        $(document).on('ajaxError', function () { NProgress.done(); });
    });
</script>
<div style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; display: none; z-index: 99; opacity: 0;" id="bg-menu-cl"></div>
<script type="text/javascript">
    $('.clsdanhmuc > #select-search, .clsdanhmuc > #select-ico').click(function () {
        $('.clsdanhmuc > .content').fadeToggle(100);
    });
    $('.clsdanhmuc > .content > p').click(function () {
        $('#select-search').html($(this).html());
        $('#select-search').data('stype', $(this).data('stype'));
        $('.clsdanhmuc > .content').fadeToggle(100);
    });

    $('.block-menu .item').hover(function () {
        $(this).addClass('menu-hover');
    }, function () {
        $(this).removeClass('menu-hover');
    });

    $('#bg-menu-cl').on('click', function () {
        $('.wapper-menu').removeClass('show-menu-tablet');
        $('#status-btnmenu').val(0);
        $('.nav-menu').removeClass('active-menu');
        $('#bg-menu-cl').css('display', 'none');
        try {
            $('#home-slide').css('margin-left', '0');
        } catch (er) {
        }
    });

    function puMenu() {
        var a = $('#status-btnmenu').val();
        if (a == 0) {
            $('.wapper-menu').addClass('show-menu-tablet');
            $('#status-btnmenu').val(1);
            $('.nav-menu').addClass('active-menu');
            $('#bg-menu-cl').css('display', 'none');
        } else {
            $('.wapper-menu').removeClass('show-menu-tablet');
            $('#status-btnmenu').val(0);
            $('.nav-menu').removeClass('active-menu');
            $('#bg-menu-cl').css('display', 'none');
        }
    }

    $(document).ready(function () {
        $(window).resize(function () {
            $('.wapper-menu').removeClass('show-menu-tablet');
            $('#status-btnmenu').val(0);
            $('.nav-menu').removeClass('active-menu');
            resize();
        });
    });

    $(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $('.scrollToTop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
            return false;
        });
    });

    function BindProHover() {
        $('.ProductList3Col_item').unbind('mouseenter').unbind('mouseleave');
        $('.ProductList3Col_item').mouseenter(function () {
            $(this).addClass('dHover');
            $('.dHover .detail').fadeIn(200);
        }).mouseleave(function () {
            $('.dHover .detail').hide();
            $(this).removeClass('dHover');
        });
    }

    $(document).ready(function () {
        // Dem so luot dat mua qua goi dien            
        $('#telnumber').on('click', function () {
            ga('send', 'event', 'Goi-dien', 'click', 'call-telephone');
        });
        
        var a = $('.history .text1').width();
        a = 220 + a;
        $('.history > .text2').css('left', a + 'px');
    });
</script>
<div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7&appId=1659855120928816";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<?php wp_footer(); ?>

</body>
</html>
