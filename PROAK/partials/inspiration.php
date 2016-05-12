<section id="inspiration" data-padding="10">
    <header>
        <h1 class="title-section">inspirujące artykuły</h1>
    </header>
    <article class="text-center clearfix">
        <p class="text-center">Kliknij na wybraną ikonę, aby otworzyć pdf</p>
        <div class="clearfix pdf-container">
            <?php
            $args = array(
                'post_status' => 'publish',
                'post_type'   => 'inspiracje'
            );
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
                while ( $query->have_posts() ) : $query->the_post();
                    $data = get_fields(get_the_ID());
                    $url = $data['pdf_img']['url'];
                    $size = 'thumbnail';
                    $thumb = $data['pdf_img']['sizes'][ $size ];

                    ?>
                    <?php

                    echo "
                        <div class='pdf-info'>
                            <a href='{$data['pdf_file']}' target='_blank'>
                                <img src='{$thumb}' alt='{$data['pdf_title']}' title='{$data['pdf_title']}'>
                            </a>
                            <p class='mt-lg'>{$data['pdf_title']}</p>
                        </div>
                    "
                    ?>


                <?php endwhile; else: ?>
                <p>Nie ma zdjęć do wyświetlenia</p>
            <?php endif; ?>
        </div>
        <div class="mt-xl video">
            <p>Zapraszamy do obejrzenia filmu</br> związanego z wiejską pracownią ceramiczną</p>

        </div>
    </article>
</section>