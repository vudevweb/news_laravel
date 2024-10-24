        <!-- aside -->
        <aside class="col-12 col-lg-3" style="padding-left: 0%;">
            @yield('tinlienquan')

            {{-- tin nổi bật --}}
            <div class="card mb-4">
                <div class="card-header" style="border-bottom: none; padding-bottom: 0 !important;">
                    <div class="blog-posts-title title-wrap">
                        <h2 class="title">Tin nổi bật</h2>
                    </div>
                </div>
                <div class="card-body" style="padding-top: 0 !important;">
                    <div class="row">
                        @foreach ($tinnoibat as $tin)
                            <div class="col-12 py-2 row">
                                <div class="col-4 d-flex align-items-center">
                                    <img width="100%" src="{{ $tin->thumbnail }}" class="rounded" alt="">
                                </div>
                                <div class="col-8">
                                    <h5 class="card-title">
                                        <a href="{{ route('tinchitiet', $tin->slug) }}" class="text-link">
                                            {{ $tin->name }}
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        @endforeach
                    </div>

                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header" style="border-bottom: none; padding-bottom: 0 !important;">
                    <div class="blog-posts-title title-wrap">
                        <h2 class="title">Danh mục</h2>
                    </div>
                </div>
                <div class="card-body" style="padding-top: 0 !important;">
                    <ul class="list-unstyled mb-0 nav nav-x-0 flex-column">
                        @foreach ($categories as $item)
                            <li class="catalog_vd lh-lg mb-1 d-flex justify-content-between">
                                <span class="d-flex-center gap-2">
                                    <i class="fe fe-arrow-right text-muted"></i>
                                    <a href="{{ route('loaitin', $item->slug) }}" class="text-link d-inline">
                                        {{ $item->name }}
                                    </a>
                                </span>
                                <span>
                                    {{ $item->posts->where('status', 'public')->count() }} bài viết
                                </span>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-header" style="border-bottom: none; padding-bottom: 0 !important;">
                    <div class="blog-posts-title title-wrap">
                        <h2 class="title">Thẻ nổi bật</h2>
                    </div>
                </div>
                <div class="card-body" style="padding-top: 0 !important;">
                    <div class="mt-3">
                        <a href="#" class="btn btn-light btn-xs mb-2">business</a>
                        <a href="#" class="btn btn-light btn-xs  mb-2">e-commerce</a>
                        <a href="#" class="btn btn-light btn-xs  mb-2">course</a>
                        <a href="#" class="btn btn-light btn-xs  mb-2">dashboard</a>
                        <a href="#" class="btn btn-light btn-xs  mb-2">landings</a>
                        <a href="#" class="btn btn-light btn-xs  mb-2">marketing</a>
                    </div>
                </div>
            </div>
        </aside>
        <!-- end content -->
